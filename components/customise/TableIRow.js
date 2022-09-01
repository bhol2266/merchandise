


const TableIRow = (props) => {

    const { No,
        Parameter,
        Status,
        Date,
        amountRequested,
        amountProcessed } = props.data
    return (

        <div className="grid gridClass pb-2  gap-2">
        <h2 className="font-inter  text-[9px] sm:text-[10px] lg:text-[14px] text-[#323232]  mt-[1px] text-center">{No}</h2>

            <h2 className="font-inter  text-[9px] sm:text-[10px] lg:text-[14px] text-[#323232]  mt-[1px] text-center">{Parameter}</h2>

            <h2 className="font-inter  text-[9px] sm:text-[10px] lg:text-[14px] text-[#323232]  mt-[1px] text-center">{Status}</h2>

            <h2 className="font-inter  text-[9px] sm:text-[10px] lg:text-[14px] text-[#323232]  mt-[1px] text-center">{Date}</h2>

            <h2 className="font-inter  text-[9px] sm:text-[10px] lg:text-[14px] text-[#323232]  mt-[1px] text-center">₹{amountRequested}</h2>

            <h2 className="font-inter  text-[9px] sm:text-[10px] lg:text-[14px] text-[#323232]  mt-[1px] text-center">₹{amountProcessed}</h2>
        </div>
    )
};
export default TableIRow;