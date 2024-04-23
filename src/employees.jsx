let antonio = 'Antonio de Lis'
let sally = 'Sally Smith'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let monkey = 'Monkey D. Luffy'
let ace = 'Portgas D. Ace'
const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}}>
        <li>{antonio}</li>
        <li>{sally}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{robin}</li>
        <li>{monkey}</li>
        <li>{ace}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))