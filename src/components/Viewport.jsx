function Viewport({ children }) {
  return (
    <div id="viewport" className='fixed'>
        {children}
    </div>
  )
}

export default Viewport