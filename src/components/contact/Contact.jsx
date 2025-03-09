import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');

  // Spam detection functions
  const isSpamContent = (text) => {
    // Convert to lowercase for case-insensitive checking
    const lowerText = text.toLowerCase();
    
    // Check for spam keywords
    const spamKeywords = [
      'casino', 'viagra', 'lottery', 'prize', 'winner', 
      'buy now', 'cheap', 'discount', 'free offer', 'loan',
      'bitcoin', 'crypto', 'investment opportunity'
    ];
    
    if (spamKeywords.some(keyword => lowerText.includes(keyword))) {
      return true;
    }

    // Check for excessive URLs
    const urlCount = (text.match(/https?:\/\/[^\s]+/g) || []).length;
    if (urlCount > 3) {
      return true;
    }

    // Check for repeated characters (possible spam pattern)
    const repeatedCharsPattern = /(.)\1{4,}/;
    if (repeatedCharsPattern.test(text)) {
      return true;
    }

    // Check for excessive capitalization
    const upperCasePercentage = text.split('').filter(char => char.match(/[A-Z]/)).length / text.length;
    if (upperCasePercentage > 0.5 && text.length > 10) {
      return true;
    }

    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Name validation
    if (!formData.name.trim()) {
      setError('Name is required');
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Message validation
    if (!formData.message.trim()) {
      setError('Message is required');
      return;
    }

    // Spam detection
    if (isSpamContent(formData.name)) {
      setError('Please enter a valid name without spam content');
      return;
    }

    if (isSpamContent(formData.message)) {
      setError('Your message appears to contain spam content. Please revise and try again.');
      return;
    }

    // Additional spam checks
    // Check message length (too short might be spam)
    if (formData.message.trim().length < 10) {
      setError('Please provide a more detailed message');
      return;
    }

    // Check for message/name ratio (spam often has very long messages with short names)
    if (formData.message.length > 1000 && formData.name.length < 3) {
      setError('Please provide a valid name');
      return;
    }

    // If all validations pass, submit the form
    const form = e.target;
    form.submit();
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact Me</span>

      <div className='contact__container container grid'>
        <div className='contact__content'>
          {/* <h3 className='contact__title'>Talk to me</h3> */}

          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon'></i>

              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>rajatrathi029@gmail.com</span>
              <a href='mailto: rajatrathi029@gmail.com' target="_blank" className='contact__button'> Write me{" "}
                <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
            </div>

            <div className='contact__card'>
              <i className='bx bxl-whatsapp contact__card-icon'></i>

              <h3 className='contact__card-title'>Whatsapp</h3>
              <span className='contact__card-data'>+91 97114 42850</span>
              <a href='https://web.whatsapp.com/' target="_blank" className='contact__button'> Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
            </div>

            <div className='contact__card'>
              <i className='bx bxl-twitter contact__card-icon'></i>

              <h3 className='contact__card-title'>Twitter</h3>
              <span className='contact__card-data'>@iamvishalrathi1</span>
              <a href='https://twitter.com/iamvishalrathi1' target="_blank" className='contact__button'> Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            {/* <div className='contact__card'>
              <i className='uil uil-location-point contact__card-icon'></i>

              <h3 className='contact__card-title'>Location</h3>
              <span className='contact__card-data'>New Delhi, India</span>
            </div> */}
          </div>
        </div>
        <div className='contact__content'>
          {/* <h3 className='contact__title'>Write me your message</h3> */}

          <form 
            className='contact__form' 
            action="https://formspree.io/f/xovjwvqz"
            method="POST"
            onSubmit={handleSubmit}
          >
            {error && <div className='contact__form-error'>{error}</div>}
            
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Name</label>
              <input 
                type='text' 
                name='name' 
                className='contact__form-input'
                placeholder='Name' 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className='contact__form-div'>
              <label className='contact__form-tag'>Email</label>
              <input 
                name='email' 
                className='contact__form-input'
                placeholder='Email' 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>Message</label>
              <textarea 
                name='message' 
                cols='30' 
                rows='7' 
                className='contact__form-input'
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type='submit' className='button button--flex'>Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact