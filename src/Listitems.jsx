import './Listitems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function ListItems(props) {
   const items =props.items;

  
    return (
      <div>
      {items.map(item => (
        <div className='list' key={item.key}>
          <p className="todotext"  >{item.text} <span><FontAwesomeIcon icon={faTrash} onClick={()=>props.deleteItem(item.key)} /></span></p>
        </div>
      ))}
      </div>
    );
  }
  
  export default ListItems;
  