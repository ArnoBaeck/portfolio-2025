import Background from "./components/Background";
import ResponsiveText from "./components/ResponsiveText";
import Test from "./components/Test";

function App() {
	return (
		<>
			<Background />

			<div
				className="above-background"
				style={{
					position: "relative",
				}}
			>
				<div className="responsive-text-container" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
					<div className="responsive-text" style={{width:"70%", height:"50vh", display:"flex", flexDirection:"column", alignContent:"center", alignItems:"center"}}>
						<ResponsiveText
							text={`FULL-STACK`}
							flex={true}
							alpha={false}
							stroke={false}
							width={true}
							weight={true}
							italic={true}
							textColor="#ffffff"
							strokeColor="#ff0000"
							minFontSize={36}
						/>

						<ResponsiveText
							text={`WEB DEVELOPER`}
							flex={true}
							alpha={false}
							stroke={false}
							width={true}
							weight={true}
							italic={true}
							textColor="#ffffff"
							strokeColor="#ff0000"
							minFontSize={36}
						/>
					</div>
				</div>

				<Test />
			</div>
		</>
	);
}

export default App;
