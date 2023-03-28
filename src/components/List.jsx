import parse from 'html-react-parser';

function List({title, items}) {
  const listItems = items.map(item => {
    return (
      <li key={item.label} className='mb-2'>
        <b>{parse(item.label)}:</b> {parse(item.value)} 
        {item.note ? (
          <>
            <br />
            <span className='block text-sm opacity-60 leading-tight'>
              {parse(item.note)}
            </span>
          </>
        ): (
          null
        )}
      </li>
    )
  })

  return (
    <>
      <h2 className='text-lg mb-2'>{title}</h2>
      <ul>{listItems}</ul>
    </>
  )
}

export default List;