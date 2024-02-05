export default function OtherLanguages(props) {

    return (
      <ul className="Other-languages-mob" style={{display : props.activeItem7 ? "block" : "none"}}>
        <li className="Other-languages-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب زبان روسی</a>
        </li>
        <li className="Other-languages-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب زبان چینی</a>
        </li>
        <li className="Other-languages-item-mob">
          <a href="//" style={{width : "100%"}}>کتاب زبان عربی</a>
        </li>
        <li className="Other-languages-item-mob">
          <a href="//" style={{width : "100%"}}>زبان های دیگر</a>
        </li>
      </ul>
    );
  }