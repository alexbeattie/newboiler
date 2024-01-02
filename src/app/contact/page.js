import Link from 'next/link';
export default function Contact() {
  return (
    <>
      <div className='flex justify-center py-2'>Contact</div>
      
      <form className='flex flex-col items-center'>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" />
        <button type="submit">Send</button>

      </form>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}