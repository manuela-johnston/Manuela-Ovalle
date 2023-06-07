import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsLetter from './Newsletter'

export default function MailchimpForm() {
  const postUrl = `${import.meta.env.REACT_APP_MAILCHIMP_URL}?u=${
    import.meta.env.REACT_APP_MAILCHIMP_U
  }&id=${import.meta.env.REACT_APP_MAILCHIMP_ID}`

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <NewsLetter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  )
}
