
const NumberList = (props) => {
    const textos = props.textos;
    const listItems = textos.map((textos, index) =>
      {
        console.log(textos)
        const texto2 = textos.split(' ');
        console.log(texto2)

        texto2.map((palavra) => <td>{palavra}</td>)

        return (
          <tr>
            <td>{index}</td>
            <td>{textos}</td>
          </tr>
        )}
    );
    return (
      <table class="table">
        <tbody>
          <tr>
            
            <th scope="row">N</th>
            <td>Tentativas</td>

          </tr>
          
          {listItems}
            
        </tbody>
      </table>
    );
  }

  export default NumberList