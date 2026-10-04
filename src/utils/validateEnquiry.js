const PHONE_PATTERN = /^[6-9]\d{9}$/

export function validateEnquiry(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter a name.'
  if (!PHONE_PATTERN.test(values.phone.replace(/\s+/g, ''))) {
    errors.phone = 'Enter a valid 10-digit mobile number.'
  }
  if (!values.grade) errors.grade = 'Please select a class.'
  if (!values.state) errors.state = 'Please select your state.'
  if (!values.consent) errors.consent = 'Please tick the box to continue.'
  return errors
}