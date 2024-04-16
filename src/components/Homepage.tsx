import GithubLogo from "./../assets/GithubLogo";
import ResumeForgeLogo from "./../assets/ResumeForgeLogo";
import GenericGuyImage from "./../assets/GenericGuy.jpg";
import { Link } from "react-router-dom";

export function Homepage() {
	return (
		<>
			<header>
				<div className="logo-wrapper">
					<ResumeForgeLogo></ResumeForgeLogo>
					<h2>ResumeForge</h2>
				</div>
				<div className="account">
					<button className="log-in">log-in</button>
					<button className="log-out">log-out</button>
				</div>
			</header>
			<main>
				<div className="main-hero">
					<div className="hero-paragraphs">
						<p>Semplice, veloce e efficace</p>
						<p>Crea il tuo CV personalizzato in pochi passaggi</p>
					</div>
					<div className="hero-buttons">
						<button>
							<Link to="/form">Crea il tuo CV adesso</Link>
						</button>
					</div>
				</div>
				<div className="main-image">
					<img
						src={GenericGuyImage}
						alt="Generic Guy"
						className="image"
						style={{ aspectRatio: "4/3", width: "10%" }}
					/>
				</div>
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
