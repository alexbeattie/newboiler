export default function Page() {
  return (
    <div>
      <form action="api" className='flex flex-col items-center'>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}