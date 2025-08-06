export default function BootstrapExample(){
    return (
        <>
        <p>This is regulat html button</p>
        <button type="submit">Submit</button>

        <p>These are bootstrap button</p>
        <button class="btn btn-primary">ADD</button>
        <button class="btn btn-success">SUCCESS</button>

        <p>Bootstrap Table</p>
        <table class="table table-bordered table-dark">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            <tr>
                <td>Rohan</td>
                <td>Prajapati</td>
            </tr>
        </table>
        </>
    )
}