document.addEventListener('DOMContentLoaded', function () {
  // Menu category switching
  const categoryLinks = document.querySelectorAll('.category-link');

  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove active class from all links
      categoryLinks.forEach(l => l.classList.remove('active'));

      // Add active class to clicked link
      this.classList.add('active');

      // Get category
      const category = this.getAttribute('data-category');

      // For now, just show the appetizers (in a real app, you'd have multiple menu sections)
      console.log('Switching to category:', category);
    });
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') return;

      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Booking form
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const partySizeSelect = document.getElementById('partySize');
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');
  const notesInput = document.getElementById('notes');
  const messageEl = document.getElementById('bookingMessage');

  const OPEN_HOUR = 17; // 5:00 PM
  const CLOSE_HOUR = 23; // 11:00 PM
  const MAX_TABLES_PER_SLOT = 10;

  // Helpers
  function getTodayDateString() {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  function setMinDate() {
    dateInput.min = getTodayDateString();
  }

  function constrainTimeField() {
    timeInput.min = `${String(OPEN_HOUR).padStart(2, '0')}:00`;
    timeInput.max = `${String(CLOSE_HOUR).padStart(2, '0')}:00`;
    timeInput.step = 1800; // 30 mins
  }

  function readBookings() {
    try {
      return JSON.parse(localStorage.getItem('bookings') || '[]');
    } catch (_) {
      return [];
    }
  }

  function writeBookings(bookings) {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }

  function isPast(dateStr, timeStr) {
    const dt = new Date(`${dateStr}T${timeStr}`);
    return dt.getTime() < Date.now();
  }

  function validateInputs() {
    const errors = [];

    if (!nameInput.value.trim()) errors.push('Name is required');
    if (!phoneInput.value.trim()) errors.push('Phone is required');
    if (!emailInput.value.trim()) errors.push('Email is required');
    if (!partySizeSelect.value) errors.push('Party size is required');
    if (!dateInput.value) errors.push('Date is required');
    if (!timeInput.value) errors.push('Time is required');

    const emailOk = /.+@.+\..+/.test(emailInput.value.trim());
    if (emailInput.value && !emailOk) errors.push('Enter a valid email');

    // Basic phone check: digits, spaces, (), -, + allowed
    const phoneOk = /^[0-9\s()+-]{7,}$/.test(phoneInput.value.trim());
    if (phoneInput.value && !phoneOk) errors.push('Enter a valid phone');

    if (dateInput.value && timeInput.value) {
      if (isPast(dateInput.value, timeInput.value)) {
        errors.push('Selected time is in the past');
      }
      const hour = parseInt(timeInput.value.split(':')[0], 10);
      if (hour < OPEN_HOUR || hour > CLOSE_HOUR) {
        errors.push('Please choose a time within opening hours');
      }
    }

    return errors;
  }

  function checkAvailability(dateStr, timeStr) {
    const bookings = readBookings();
    const slotKey = `${dateStr}T${timeStr}`;
    const count = bookings.filter(b => b.slotKey === slotKey).length;
    return count < MAX_TABLES_PER_SLOT;
  }

  function showMessage(text, type) {
    messageEl.textContent = text;
    messageEl.classList.remove('error', 'success');
    if (type) messageEl.classList.add(type);
  }

  function clearForm() {
    form.reset();
    setMinDate();
    showMessage('', null);
  }

  // Init fields
  setMinDate();
  constrainTimeField();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    showMessage('', null);

    const errors = validateInputs();
    if (errors.length) {
      showMessage(errors[0], 'error');
      return;
    }

    const dateStr = dateInput.value;
    const timeStr = timeInput.value;
    if (!checkAvailability(dateStr, timeStr)) {
      showMessage('Sorry, this time slot is fully booked. Please choose another.', 'error');
      return;
    }

    const slotKey = `${dateStr}T${timeStr}`;
    const booking = {
      id: `${Date.now()}`,
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput.value.trim(),
      partySize: parseInt(partySizeSelect.value, 10),
      date: dateStr,
      time: timeStr,
      slotKey,
      notes: notesInput.value.trim() || ''
    };

    const bookings = readBookings();
    bookings.push(booking);
    writeBookings(bookings);

    showMessage(`Table reserved for ${booking.partySize} on ${booking.date} at ${booking.time}.`, 'success');
    form.querySelector('button[type="submit"]').disabled = true;
    setTimeout(() => {
      form.querySelector('button[type="submit"]').disabled = false;
      clearForm();
    }, 2000);
  });
});


