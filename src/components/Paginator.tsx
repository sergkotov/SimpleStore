import { FC, memo } from "react";
import { PaginationProps } from "../types/storeTypes";

const Pagination: FC<PaginationProps> = (props: PaginationProps) => {

    return (
        <div className="store-pagination">
            {
                Array(Math.ceil(props.nav.total / props.perPage)).fill(0).map((_, index) => (
                    <button key={index} onClick={() => props.onChangePage(index+1)}
                        className={"store-pagination__item" + ((props.nav.current === index+1) ? " store-pagination__item_active" : "")}>
                        {index+1}</button>
                )
            )}
        </div>
    )
}

export default memo(Pagination);