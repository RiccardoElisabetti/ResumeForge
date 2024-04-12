import "./App.css";
import {Logo} from "./logo.tsx";
import {GithubLogo} from "./github-logo.tsx"

function App() {
	return (
		<>
			<header>
				<div className="logo-wrapper">
					<Logo></Logo>
					<h2>ResumeForge</h2>
				</div>
				<div className="account">
					<button className="log-in">log-in</button>
					<button className="log-out">log-out</button>
				</div>
			</header>
			<main>
				<div className="hero">
					<h1>
						Semplice, veloce e efficace
						<br></br>
						<br></br>
						Crea il tuo CV personalizzato in pochi passaggi
					</h1>
					<div className="hero-buttons">
						<button>Crea il tuo CV adesso</button>
					</div>
				</div>
				<div className="image"></div>
			</main>
			<footer>
				<h2>Hai riscontrato problemi nella creazione del tuo CV?</h2>
				<div className="github">
					<GithubLogo></GithubLogo>
					<div>github page</div>
				</div>
			</footer>
		</>
	);
}

export default App;
