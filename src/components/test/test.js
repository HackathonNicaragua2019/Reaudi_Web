import React, {Component} from "react"

class Test extends Component{
	
	state = {
        violentmeter: 0
    }
	handleChange = (e) =>{
		
		const {state} = this;
		let contador = state.violentmeter;
		console.log(parseInt(contador));
		contador = + parseInt(e.target.value);
		this.setState({
			[e.target.id]: contador
		})
		
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		const { state } = this;
		console.log(state);
		
		
	}
	render (){
		return (
			<div className="container  bg-danger">
                <div className="card bg-warning ">
					<form className="form-group" onSubmit={this.handleSubmit}>
						<p className="text-center font-weight-bold ">VIOLENTOMETRO</p>
						<div className="card body test">
							<div className="card-title text-center">
								<label >1. ¿Le ha insultado?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >2. ¿Le ha rebajado o menospreciado? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >3. ¿La menosprecia o humilla frente a otras personas</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >4. ¿Le ha dicho cosas como que sea usted poco atractiva o fea? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >5. ¿Se ha puesto celoso o ha sospechado de sus amistades?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >6. ¿Se ha puesto a golpear o patear la pared o algún otro mueble?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >7. ¿Le ha amenazado con golpearle?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >8. ¿Le ha destruido alguna de sus cosas?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >9. ¿Le ha hecho sentir miedo de él? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >10. ¿Le ha pegado con la mano o con el puño?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >11. ¿Le ha sacudido, zarandeado, o jaloneado?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >12. ¿Le ha torcido el brazo?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >13. ¿Le ha pateado?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >14. ¿Le ha empujado a propósito?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >15. ¿Le ha golpeado con algún palo o cinturón o algún objeto doméstico?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select class="custom-select " multiple>
									<option selected value="1">Si</option>
									<option value="2">No</option>
									
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >16. ¿Le ha amenazado con matarla o matarse él o a los niños? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select class="custom-select " multiple>
									<option selected value="1">Si</option>
									<option value="2">No</option>
									
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >17. ¿Le ha disparado con una pistola o rifle? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >18. ¿Le ha agredido con alguna navaja, cuchillo o machete? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >19. ¿Le ha quemado con cigarro o alguna otra sustancia? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >20. ¿Le ha amenazado con alguna pistola o rifle? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >21. ¿Le ha amenazado con alguna navaja, cuchillo o machete? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >22. ¿Le ha tratado de ahorcar o asfixiar?  </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >23. ¿Le ha exigido tener relaciones sexuales con él?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body  test">
							<div className="card-title text-center">
								<label >24. ¿Ha usado fuerza física para tener relaciones sexuales con usted?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >25. ¿Le ha amenazado con irse con otras mujeres si no accede a tener relaciones sexuales?</label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >26. ¿Le ha controlado con no darle dinero o quitándoselo? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >27. ¿Le ha quitado o ha hecho uso de sus pertenencias en contra de su voluntad? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<div className="card body test">
							<div className="card-title text-center">
								<label >28. ¿Le ha sacudido, zarandeado o jaloneado? </label>< br/>
							</div>
							<div className="card-action text-center">
								<select onChange={this.handleChange} id="violentmeter" class="custom-select uno" multiple>
									<option value="0">No</option>
									<option selected value="1">Si</option>
								</select>
							</div>
						</div>
						<button type="submit" class="btn btn-primary center">Enviar</button>
						
						
					</form>
				

				

				</div>
			</div>

			
		)
	}
}

export default Test 





