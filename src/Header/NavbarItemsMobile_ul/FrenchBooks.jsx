export default function FrenchBooks(props) {

    return (
      <ul className="French-books-mob" style={{display : props.activeItem3 ? "block" : "none"}}>
        <li className="French-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب های آموزش زبان فرانسوی</a>
        </li>
        <li className="French-books-item-mob">
          <a href="//" style={{width : "100%"}}>خودآموزهای فرانسوی</a>
        </li>
        <li className="French-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب داستان فرانسوی</a>
        </li>
        <li className="French-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب رمان فرانسوی</a>
        </li>
        <li className="French-books-item-mob">
          <a href="//" style={{width : "100%"}}>دیکشنری فرانسوی</a>
        </li>
        <li className="French-books-item-mob">
          <a href="//" style={{width : "100%"}}>نرم افزار و انیمیشن فرانسوی</a>
        </li>
      </ul>
    );
  }