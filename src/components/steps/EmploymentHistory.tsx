import { Link } from "react-router-dom";
import { Experience } from "../ExperienceSection";
import { Skill } from "../SkillSection";
import { FormWrapper } from "../FormWrapper";

export function EmploymentHistory() {
	return (
		<FormWrapper>
			<fieldset style={{ display: "block", width: "50%" }}>
				<Experience />
				<Skill />
				<div>
					<button>
						<Link to="/form/">back</Link>
					</button>
					<button>
						<Link to="/form/summary">next</Link>
					</button>
				</div>
			</fieldset>
		</FormWrapper>
	);
}
