import './Main.css'
import Name from './name/Name'
import Price from './price/Price'
import Foto from './foto/Foto'
function Main(props) {
	const arr = props.data
	return (
		<div className='all'>
			{arr.map((el, id) => {
				return (
					<div key={id} className='burger'>
						<Foto img = {el.img}/>

						<Name  text={el.text}/>
						<Price  price = {el.price}$ />
					</div>
				)
			})}
		</div>
	)
}
export default Main
