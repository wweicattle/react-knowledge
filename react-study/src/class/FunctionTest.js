import "../css/index.css"


export default function Test() {
    console.log(this);
    return (
        <div className="contain" onClick={function () { console.log(this); }}>
            this is function component sas
            <div className="contain" onClick={() => { console.log(this); }}>
                this is function component sas
            </div>
        </div>
    )
}