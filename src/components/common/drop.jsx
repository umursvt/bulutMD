import { Dropdown } from 'react-bootstrap';

function DropButton({ handleOrderBy, sortBy }) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        className=" bg-white text-dark w-100"
      >
        Sırala
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          value={sortBy}
          onClick={() => handleOrderBy('title')}
          href="#"
        >
          Başlığa göre sırala
        </Dropdown.Item>
        <Dropdown.Item
          value={sortBy}
          onClick={() => handleOrderBy('description')}
          href="#"
        >
          Açıklamaya göre sırala
        </Dropdown.Item>
        <Dropdown.Item
          value={sortBy}
          onClick={() => handleOrderBy('releaseYear')}
          href="#"
        >
          Yıl'a göre sırala
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropButton;
