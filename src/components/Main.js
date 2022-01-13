import './Main.css'
function Main(props) {
	const arr = props.data
	return (
		<div className='all'>
			{arr.map((el, id) => {
				return (
					<div className='burger'>
						<img className='img' src={el.img} />

						<div className='text'> {el.text}</div>
						<div className='price'>{el.price}$</div>
					</div>
				)
			})}
		</div>
	)
}
export default Main
