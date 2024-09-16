import {Link } from 'react-router-dom';
//
function Page() {
  return (
  <div>
    <Link to="/">[ Home ]</Link>
    <a href="/button" className="ms-2"> [ Button ]</a>
    <a href="/checkbox" className="ms-2"> [ Checkbox ]</a>
    <a href="/dialog" className="ms-2"> [ Dialog ]</a>
    <a href="/radiobuttonsgroup" className="ms-2"> [ Radio ]</a>
    <a href="/select" className="ms-2"> [ Select ]</a>
    <a href="/textfield" className="ms-2"> [ TextField ]</a>
    <hr />
  </div>
  );
}
export default Page;
/*
<a href="/about" className="ms-2"> [ about ]</a>
*/