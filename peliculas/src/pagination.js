export default function Pagination(props) {

    const getPagination = () => {
        let resultado = []
        for (var i = 0; i < props.total; i++) {
            let page = i+1
            resultado.push(
            <a onClick={() => props.onChange(page)} className={props.page === page ? 'active' : ''}>{page}</a>
            )
        }
        return resultado
    }
    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Page {props.page} of {props.total}:</span>

                {/* {Array.apply(0,Array(props.total)).map(value =>
                    <a className="active" href="#">1</a>
                )} */}
                {getPagination()}
            </div>
        </div>
    )
}