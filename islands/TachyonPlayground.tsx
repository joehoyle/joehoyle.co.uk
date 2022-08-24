/** @jsx h */
import { h } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { tw } from "@twind";

interface Props {

}

const images = [
	"https://demo.altis.cloud/tachyon/2020/03/wilson-chen-uVLhEIuBiwM-unsplash-scaled.jpg",
	"https://demo.altis.cloud/tachyon/sites/16/2020/11/volunteers-hero.jpg",
	"https://demo.altis.cloud/tachyon/sites/16/2020/06/about-hero.jpg",
	"https://demo.altis.cloud/tachyon/2020/03/ryan-jacobson-rOYhgmDIOg8-unsplash-1-scaled.jpg",
	"https://demo.altis.cloud/tachyon/2020/03/efe-kurnaz-RnCPiXixooY-unsplash-1-scaled.jpg"
]

export default function TachyonPlayground(props: Props) {
	const imageRef = useRef<HTMLImageElement>(null);
	const [ width, setWidth ] = useState(400);
	const [ height, setHeight ] = useState(400);
	const [ quality, setQuality ] = useState(100);
	const [ resize, setResize ] = useState(false);
	const [ webp, setWebp ] = useState(true);
	const [ zoom, setZoom ] = useState(1);
	const [ gravity, setGravity ] = useState("center");
	const [ loading, setLoading ] = useState(false);
	const [ imageUrl, setImageUrl ] = useState(images[0]);
	const [ naturalSize, setNaturalSize ] = useState({width: 0, height: 0});

	const params: { [ key: string ]: string } = {
		quality: String( quality ),
		webp: webp ? '1' : '0',
		zoom: String( zoom ),
		gravity,
	};

	if ( resize ) {
		params.resize = `${ width }, ${ height }`;
	} else {
		params.w = String( width );
		params.h = String( height );
	}

	useEffect( () => {
		setLoading( true );
	}, [ width, height, webp, zoom, quality, resize, gravity ] );

	useEffect(() => {
		setTimeout( () => {
			setLoading( ! imageRef.current?.complete );
			if ( imageRef.current?.complete ) {
				setNaturalSize({
					width:imageRef.current?.naturalWidth,
					height:imageRef.current?.naturalHeight,
				} );
			}
		}, 100 );
	}, [])

	const url = new URL( imageUrl );
	url.search = ( new URLSearchParams( params ) ).toString();
	return (
		<div className={tw`flex w-full flex-col`}>
			<div className={tw`w-full mb-8`}>
				<span className={ tw`mb-2 block text-xs font-medium text-gray-700` }>Select Image</span>
				<div className={tw`flex space-x-4`}>
					{ images.map( ( image, id ) => (
						<img
							ref={imageRef}
							className={tw`items-center self-center justify-center h-16 shadow rounded ring-2 ${ image === imageUrl ? 'ring-blue-300' : 'ring-gray-200' }`}
							src={ `${ image }?fit=128,128` }
							key={ id }
							onClick={ () => { setImageUrl( image ); setLoading( true ); } }
							/>
					) ) }

				</div>
			</div>
			<div className={tw`flex w-full`}>
				<div style={ { width: '800px', height: '600px' } } className={tw`relative flex items-center justify-center w-full shadow-lg rounded-lg ring-1 ring-gray-200`}>
					{ loading && <div className={tw`inset-0 absolute flex items-center justify-center bg-white bg-opacity-80 z-10 fill-blue-600`}>
						<svg aria-hidden="true" class={tw`w-8 h-8 text-white animate-spin fill-blue-600`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
							<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
						</svg>
					</div> }
					<img
						className={tw`self-center max-h-full`}
						src={ url.toString() }
						onLoad={ e => {
							setTimeout( () => {
								setLoading( false );
								setNaturalSize({
									width: e.target.naturalWidth,
									height: e.target.naturalHeight,
								})
							}, 100 );
						} } />
				</div>
				<div className={tw`w-64 shrink-0 p-4`}>
					<div className={tw`flex space-x-4`}>
						<div className={ tw`mb-4` }>
							<label for="width" className={ tw`mb-1 block text-xs font-medium text-gray-700` }>Max Width (<code>w</code>)</label>
							<input type="text" name="width" id="width" className={ tw`py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md`} value={ width } onChange={ e => setWidth( e.target.value ) } />
						</div>

						<div className={ tw`mb-4` }>
							<label for="height" className={ tw`mb-1 block text-xs font-medium text-gray-700` }>Max Height (<code>h</code>)</label>
							<input type="text" name="height" id="height" className={ tw`py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md`} value={ height } onChange={ e => setHeight( e.target.value ) } />
						</div>
					</div>
					<div className={ tw`mt-1 mb-4 flex` }>
						<input type="checkbox" name="resize" id="resize" className={ tw`focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2`} checked={ resize } onChange={ e => setResize( e.target.checked ) } />
						<label for="resize" className={ tw`block text-xs font-medium text-gray-700` }>Resize (<code>resize</code>)</label>
					</div>

					<div className={ tw`mt-1 mb-4 flex` }>
						<input type="checkbox" name="webp" id="webp" className={ tw`focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2`} checked={ webp } onChange={ e => setWebp( e.target.checked ) } />
						<label for="webp" className={ tw`block text-xs font-medium text-gray-700` }>WebP (<code>webp</code>)</label>
					</div>

					<div className={ tw`mb-4` }>
						<label for="height" className={ tw`mb-1 block text-xs font-medium text-gray-700` }>Crop gravity (<code>gravity</code>)</label>

						<select disabled={ ! resize } name="height" id="height" className={ tw`disabled:opacity-50 py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md`} value={ gravity } onChange={ e => setGravity( e.target.value ) }>
							<option value="center">Center</option>
							<option value="north">North</option>
							<option value="northeast">North East</option>
							<option value="east">East</option>
							<option value="southeast">South East</option>
							<option value="south">South</option>
							<option value="southwest">South West</option>
							<option value="west">West</option>
							<option value="northwest">North West</option>
						</select>
					</div>

					<label for="quality" className={ tw`block text-xs font-medium text-gray-700` }>Quality (<code>quality</code>)</label>
					<div className={ tw`mt-1 mb-4` }>
						<input type="number" min={0} max={100} name="quality" id="quality" className={ tw`py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md`} value={ quality } onChange={ e => setQuality( e.target.value ) } />
					</div>

					<label for="zoom" className={ tw`block text-xs font-medium text-gray-700` }>Zoom (<code>zoom</code>)</label>
					<div className={ tw`mt-1 mb-4` }>
						<input type="number" min={0} max={100} name="zoom" id="zoom" className={ tw`py-1 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md`} value={ zoom } onChange={ e => setZoom( e.target.value ) } />
					</div>
				</div>
			</div>
			<p className={tw`text-xs text-center my-6 text-warmGray-400`}>Image URL <code><a href={ url.toString() } target="_blank">{ url.toString() }</a>, width { naturalSize.width }px by height { naturalSize.height }px.</code></p>
		</div>
	);
}
