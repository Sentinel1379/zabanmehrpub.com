export default function SpanishBooks(props) {

    return (
      <ul className="Spanish-books-mob" style={{display : props.activeItem6 ? "block" : "none"}}>
        <li className="Spanish-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب های آموزش زبان اسپانیایی</a>
        </li>
        <li className="Spanish-books-item-mob">
          <a href="//" style={{width : "100%"}}>خودآموزهای اسپانیایی</a>
        </li>
        <li className="Spanish-books-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب داستان و رمان اسپانیایی</a>
        </li>
        <li className="Spanish-books-item-mob">
          <a href="//" style={{width : "100%"}}>دیکشنری اسپانیایی</a>
        </li>
        <li className="Spanish-books-item-mob">
          <a href="//" style={{width : "100%"}}>نرم افزار و انیمیشن اسپانیایی</a>
        </li>
      </ul>
    );
  }