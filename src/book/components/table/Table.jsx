import Tbody from "./TableRow";
import Thead from "./Thead";

function Table(){
    return(
        
<div class="mt-10 overflow-x-auto relative shadow-md sm:rounded-lg m-2 md:mx-8 lg:mx-12">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <Thead items={["Book Name","Catogery","Author","Price","Action"]}/>
        <tbody><Tbody/></tbody>
    </table>
</div>

    )
    
}
export default Table;