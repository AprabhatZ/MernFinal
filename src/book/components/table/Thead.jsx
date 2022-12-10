function Thead({items}){

    return(

        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {
                    items.map((item)=>{
                        return   <th scope="col" className="py-3 px-6">{item}</th>
                    })
                

                }
            </tr>
        </thead>

    );
}
export default Thead;