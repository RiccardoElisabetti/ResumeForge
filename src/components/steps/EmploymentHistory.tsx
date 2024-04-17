import { Link } from "react-router-dom";
import { Experience } from "../ExperienceSection";
import { Skill } from "../SkillSection";

export function EmploymentHistory() {
	return (
		<fieldset style={{display: "block", width: "50%"}}>
			<Experience/>
			<Skill/>
			<div>
				<button>
					<Link to="/form/">back</Link>
				</button>
				<button>
					<Link to="/form/summary">next</Link>
				</button>
			</div>
		</fieldset>
	);
}
