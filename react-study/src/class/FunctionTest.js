import "../css/index.css"


export default function Test(prop) {
    console.log(prop);
    return (
        <div className="contain" onClick={function () { console.log(this); }}>
            <div className="contain" onClick={() => { console.log(this); }}>
                {prop.test}
                <div></div>
                this is function component sas
            </div>
        </div>
    )
}