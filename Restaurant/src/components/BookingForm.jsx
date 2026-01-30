import { useState } from 'react';

function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        partySize: '',
        date: '',
        time: '',
        notes: '',
    });
    const [message, setMessage] = useState({ text: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const OPEN_HOUR = 17;
    const CLOSE_HOUR = 23;
    const MAX_TABLES_PER_SLOT = 10;

    const getTodayDateString = () => {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    const readBookings = () => {
        try {
            return JSON.parse(localStorage.getItem('bookings') || '[]');
        } catch {
            return [];
        }
    };

    const writeBookings = (bookings) => {
        localStorage.setItem('bookings', JSON.stringify(bookings));
    };

    const isPast = (dateStr, timeStr) => {
        const dt = new Date(`${dateStr}T${timeStr}`);
        return dt.getTime() < Date.now();
    };

    const checkAvailability = (dateStr, timeStr) => {
        const bookings = readBookings();
        const slotKey = `${dateStr}T${timeStr}`;
        const count = bookings.filter((b) => b.slotKey === slotKey).length;
        return count < MAX_TABLES_PER_SLOT;
    };

    const validateForm = () => {
        const errors = [];

        if (!formData.name.trim()) errors.push('Name is required');
        if (!formData.phone.trim()) errors.push('Phone is required');
        if (!formData.email.trim()) errors.push('Email is required');
        if (!formData.partySize) errors.push('Party size is required');
        if (!formData.date) errors.push('Date is required');
        if (!formData.time) errors.push('Time is required');

        const emailOk = /.+@.+\..+/.test(formData.email.trim());
        if (formData.email && !emailOk) errors.push('Enter a valid email');

        const phoneOk = /^[0-9\s()+-]{7,}$/.test(formData.phone.trim());
        if (formData.phone && !phoneOk) errors.push('Enter a valid phone');

        if (formData.date && formData.time) {
            if (isPast(formData.date, formData.time)) {
                errors.push('Selected time is in the past');
            }
            const hour = parseInt(formData.time.split(':')[0], 10);
            if (hour < OPEN_HOUR || hour > CLOSE_HOUR) {
                errors.push('Please choose a time within opening hours (5PM - 11PM)');
            }
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setMessage({ text: '', type: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage({ text: '', type: '' });

        const errors = validateForm();
        if (errors.length > 0) {
            setMessage({ text: errors[0], type: 'error' });
            return;
        }

        if (!checkAvailability(formData.date, formData.time)) {
            setMessage({ text: 'Sorry, this time slot is fully booked. Please choose another.', type: 'error' });
            return;
        }

        const slotKey = `${formData.date}T${formData.time}`;
        const booking = {
            id: `${Date.now()}`,
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            partySize: parseInt(formData.partySize, 10),
            date: formData.date,
            time: formData.time,
            slotKey,
            notes: formData.notes.trim() || '',
        };

        const bookings = readBookings();
        bookings.push(booking);
        writeBookings(bookings);

        setMessage({
            text: `Table reserved for ${booking.partySize} on ${booking.date} at ${booking.time}.`,
            type: 'success',
        });

        setIsSubmitting(true);
        setTimeout(() => {
            setFormData({
                name: '',
                phone: '',
                email: '',
                partySize: '',
                date: '',
                time: '',
                notes: '',
            });
            setMessage({ text: '', type: '' });
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <div className="booking-form-card">
            <form className="booking-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="partySize">Party Size</label>
                        <select
                            id="partySize"
                            name="partySize"
                            value={formData.partySize}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                                <option key={n} value={n}>{n}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            min={getTodayDateString()}
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            min="17:00"
                            max="23:00"
                            step="1800"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-field full">
                        <label htmlFor="notes">Special Requests (optional)</label>
                        <textarea
                            id="notes"
                            name="notes"
                            rows="3"
                            placeholder="Any preferences or dietary needs?"
                            value={formData.notes}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-actions">
                    <button type="submit" className="cta-button primary" disabled={isSubmitting}>
                        Reserve Table
                    </button>
                </div>
                {message.text && (
                    <p className={`booking-message ${message.type}`} role="status" aria-live="polite">
                        {message.text}
                    </p>
                )}
            </form>
        </div>
    );
}

export default BookingForm;
