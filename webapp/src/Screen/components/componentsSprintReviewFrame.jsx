import React, { useState } from 'react'


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



export const FramePO=({visible,responsabilty})=>{
    
    const [answerOthers,setAnswerOthers] = useState(false)
   

        const handledAbleAnswer = (value)=>{
            
        if( value == "Sim" || value== "Outros"){
           return( 

            alert('Hello')
          /*  <form className='abc1'>
              <TextField
               style={{ backgroundColor: 'white', borderRadius: '5px' }}
               className='abc'
               label='Full Name'
               type='text'
               variant='outlined'
              />
           </form>     */
            )
            }else {
                return false
            }
        }
        
 if(visible){

        return(
            <div>
                    {responsabilty}


            <form >
                <TextField
                style={{ backgroundColor: 'white', borderRadius: '5px' }}
                label='Full Name'
                type='text'
                variant='outlined'
                />

            </form>



                <h1>Selecione abaixo qual time você pertence</h1>
        
                <div>
                <FormControl  >
                <InputLabel htmlFor="grouped-select" >Choose the Team</InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <ListSubheader>Teams</ListSubheader>
                        <MenuItem value="TS01" >TS01</MenuItem>
                         <MenuItem value="TS02" >TS02</MenuItem>
                         <MenuItem value="TS03" >TS03</MenuItem>
                        <MenuItem value="TS04" >TS04</MenuItem>
                </Select>
                </FormControl>

                <h1>Selecione abaixo qual time você pertence</h1>

                <FormControl  >
                <InputLabel htmlFor="grouped-select" >Choose the Team</InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <ListSubheader>Classes</ListSubheader>
                      <MenuItem value='CE-229'>CE-229</MenuItem>
                        <MenuItem value='CE-240'>CE-240</MenuItem>
                       <MenuItem value='CE-245'>CE-245</MenuItem>
                </Select>
                </FormControl>
                <br/>
                <br/>

            
                <h3>OBS.: Conseiderar a seguinte instrução para respopnder esse formulário <br/>
                1- Não houve dificuldade e 7- Alto nível de dificuldade </h3>
              
               <h4>Informe o nível de completeza da USs</h4>
                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <ListSubheader>Nivel</ListSubheader>
                      <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                       <MenuItem value='3'>3</MenuItem>
                       <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                       <MenuItem value='6'>6</MenuItem>
                       <MenuItem value='7'>7</MenuItem>
                </Select>
                </FormControl>

                <h4>Informe o nível de dificuldade para completar as USs</h4>

                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <ListSubheader>Nivel</ListSubheader>
                      <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                       <MenuItem value='3'>3</MenuItem>
                       <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                       <MenuItem value='6'>6</MenuItem>
                       <MenuItem value='7'>7</MenuItem>
                </Select>
                </FormControl>




            {/* CE-235 */}


                <h1> Avaliação do seu Time de Desenvolvimento da CE-235</h1>
                <h5>Projeto de Sistemas Embarcados de Tempo Real<br/>
                    Avalie apenas os alunos da CE-235 do seu Time Scrum</h5>

                <div>
                    <h4 style={{margin:'auto'}}>Informe o nível de assiduidade durante a Sprint dos integrantes da CE-235</h4>
                    <h6 style={{marginTop:'0px'}}>(Participação em Weekly Meeting Online, Cerimônias e Artefatos)</h6>
                </div>
                
                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <ListSubheader>Nivel</ListSubheader>
                      <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                       <MenuItem value='3'>3</MenuItem>
                       <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                       <MenuItem value='6'>6</MenuItem>
                       <MenuItem value='7'>7</MenuItem>
                </Select>
                </FormControl>

                <div>
                    <h5 style={{margin:'auto'}}>1 - Não participaram</h5>
                    <h5 style={{marginTop:'0px'}}>7 - Participaram na medida do possível</h5>
                </div>
               

                <div>
                    <h4 style={{margin:'auto'}}>Informe o nível de colaboração/cooperação durante a Sprint dos alunos da CE-235</h4>
                    <h6 style={{marginTop:'0px'}}>(Desenvolvimento das User Stories)</h6>
                </div>
                
                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <ListSubheader>Nivel</ListSubheader>
                      <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                       <MenuItem value='3'>3</MenuItem>
                       <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                       <MenuItem value='6'>6</MenuItem>
                       <MenuItem value='7'>7</MenuItem>
                </Select>
                </FormControl>
                <div>
                    <h5 style={{margin:'auto'}}>1 - Não desenvolveram</h5>
                    <h5 style={{marginTop:'0px'}}>7 - Desenvolveram na medida do possível</h5>
                </div>





                <div>
                         <h4 style={{margin:'auto'}}>Informe o nível de comprometimento com a Sprint dos alunos da CE-235</h4>
                </div>
                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <ListSubheader>Nivel</ListSubheader>
                      <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                       <MenuItem value='3'>3</MenuItem>
                       <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                       <MenuItem value='6'>6</MenuItem>
                       <MenuItem value='7'>7</MenuItem>
                </Select>
                </FormControl>

                <div>
                    <h5 style={{margin:'auto'}}>1 - Não houve comprometimento</h5>
                    <h5 style={{marginTop:'0px'}}>7 - Houve comprometimento</h5>
                </div>




                <div>
                    <h4 style={{margin:'auto'}}>Informe o nível de auto-organização dos alunos da CE-235 para atingir a meta da Sprint</h4>
                </div>

                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <ListSubheader>Nivel</ListSubheader>
                      <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                       <MenuItem value='3'>3</MenuItem>
                       <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                       <MenuItem value='6'>6</MenuItem>
                       <MenuItem value='7'>7</MenuItem>
                </Select>
                </FormControl>

                <div>
                    <h5 style={{margin:'auto'}}>1 -  Não foram auto-organizados</h5>
                    <h5 style={{marginTop:'0px'}}>7 - Foram auto-organizados</h5>
                </div>
               




                <div>
                    <h4 style={{margin:'auto'}}>Algum aluno da CE-235 não participou no desenvolvimento do Projeto nesta Sprint?</h4>
                    <h6 style={{marginTop:'0px'}}>Caso algum aluno não participou, escolha a opção Other e digite o Nome</h6>
                </div>
                
                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> setAnswerOthers(event.target.value)}>
                    <ListSubheader>Resposta</ListSubheader>
                      <MenuItem value='Sim'  onChange={()=>handledAbleAnswer("Sim")}>Sim</MenuItem>
                        <MenuItem value='Nao' >Não</MenuItem>
                       <MenuItem value='Outros' >Outros</MenuItem>
                </Select>
                </FormControl>



              

            




             
           {/* ver como habilitar o campo quando a resposta for sim 
           https://cursos.alura.com.br/forum/topico-habilitar-e-desabilitar-tag-option-de-acordo-com-select-61453
           ouuuuu
           https://pt.stackoverflow.com/questions/270975/como-habilitar-ou-desabilitar-um-input-de-acordo-com-op%C3%A7%C3%A3o-de-um-select-html-por
           ouuuuuuuuuuu
           https://ricardospinoza.wordpress.com/2011/03/21/como-habilitar-desabilitar-uma-combo-box-no-javascript/*/}








        {/* CE-237 */}


           <h1> Avaliação do seu Time de Desenvolvimento da CE-237</h1>
                <h5>Tópicos Avançados de Teste de Software<br/>
                    Avalie apenas os alunos da CE-237 do seu Time Scrum</h5>

                <div>
                    <h4 style={{margin:'auto'}}>Informe o nível de assiduidade durante a Sprint dos integrantes da CE-237</h4>
                    <h6 style={{marginTop:'0px'}}>(Participação em Weekly Meeting Online, Cerimônias e Artefatos)</h6>
                </div>
                
                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <ListSubheader>Nivel</ListSubheader>
                      <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                       <MenuItem value='3'>3</MenuItem>
                       <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                       <MenuItem value='6'>6</MenuItem>
                       <MenuItem value='7'>7</MenuItem>
                </Select>
                </FormControl>

                <div>
                    <h5 style={{margin:'auto'}}>1 - Não participaram</h5>
                    <h5 style={{marginTop:'0px'}}>7 - Participaram na medida do possível</h5>
                </div>
               

                <div>
                    <h4 style={{margin:'auto'}}>Informe o nível de colaboração/cooperação durante a Sprint dos alunos da CE-237</h4>
                    <h6 style={{marginTop:'0px'}}>(Desenvolvimento das User Stories)</h6>
                </div>
                
                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <ListSubheader>Nivel</ListSubheader>
                      <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                       <MenuItem value='3'>3</MenuItem>
                       <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                       <MenuItem value='6'>6</MenuItem>
                       <MenuItem value='7'>7</MenuItem>
                </Select>
                </FormControl>
                <div>
                    <h5 style={{margin:'auto'}}>1 - Não desenvolveram</h5>
                    <h5 style={{marginTop:'0px'}}>7 - Desenvolveram na medida do possível</h5>
                </div>





                <div>
                         <h4 style={{margin:'auto'}}>Informe o nível de comprometimento com a Sprint dos alunos da CE-237</h4>
                </div>
                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <ListSubheader>Nivel</ListSubheader>
                      <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                       <MenuItem value='3'>3</MenuItem>
                       <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                       <MenuItem value='6'>6</MenuItem>
                       <MenuItem value='7'>7</MenuItem>
                </Select>
                </FormControl>

                <div>
                    <h5 style={{margin:'auto'}}>1 - Não houve comprometimento</h5>
                    <h5 style={{marginTop:'0px'}}>7 - Houve comprometimento</h5>
                </div>




                <div>
                    <h4 style={{margin:'auto'}}>Informe o nível de auto-organização dos alunos da CE-237 para atingir a meta da Sprint</h4>
                </div>

                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                    <ListSubheader>Nivel</ListSubheader>
                      <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2'>2</MenuItem>
                       <MenuItem value='3'>3</MenuItem>
                       <MenuItem value='4'>4</MenuItem>
                        <MenuItem value='5'>5</MenuItem>
                       <MenuItem value='6'>6</MenuItem>
                       <MenuItem value='7'>7</MenuItem>
                </Select>
                </FormControl>

                <div>
                    <h5 style={{margin:'auto'}}>1 -  Não foram auto-organizados</h5>
                    <h5 style={{marginTop:'0px'}}>7 - Foram auto-organizados</h5>
                </div>



                <div>
                    <h4 style={{margin:'auto'}}>Algum aluno da CE-237 não participou no desenvolvimento do Projeto nesta Sprint?</h4>
                    <h6 style={{marginTop:'0px'}}>Caso algum aluno não participou, escolha a opção Other e digite o Nome</h6>
                </div>
                
                <FormControl  >
                <InputLabel htmlFor="grouped-select" ></InputLabel>
                <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> setAnswerOthers(event.target.value)}>
                    <ListSubheader>Resposta</ListSubheader>
                      <MenuItem value='Sim' id="" onChange={()=>handledAbleAnswer(console.log(answerOthers))}>Sim</MenuItem>
                        <MenuItem value='Nao' id="">Não</MenuItem>
                       <MenuItem value='Outros' id="">Outros</MenuItem>
                </Select>
                </FormControl>






                {/* PO */}


                <h1> Avaliação Product Owner (PO)</h1>
                        

                 <div>
                   <h4 style={{margin:'auto'}}>Informe o nível de acessibilidade do PO ao Time para esclarecimento de dúvidas ao longo da Sprint</h4>      
                 </div>
                        
                   <FormControl  >
                    <InputLabel htmlFor="grouped-select" ></InputLabel>
                      <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                         <ListSubheader>Nivel</ListSubheader>
                          <MenuItem value='1'>1</MenuItem>
                          <MenuItem value='2'>2</MenuItem>
                          <MenuItem value='3'>3</MenuItem>
                         <MenuItem value='4'>4</MenuItem>
                         <MenuItem value='5'>5</MenuItem>
                         <MenuItem value='6'>6</MenuItem>
                        <MenuItem value='7'>7</MenuItem>
                       </Select>
                    </FormControl>

                       <div>
                        <h5 style={{margin:'auto'}}>1 - Não estava acessível</h5>
                         <h5 style={{marginTop:'0px'}}>7 - Esclareceu todas as dúvidas possíveis </h5>
                        </div>
               

                <div>
                   <h4 style={{margin:'auto'}}>Informe o nível de contato direto do PO com o Time de Desenvolvimento</h4>      
                 </div>
                        
                   <FormControl  >
                    <InputLabel htmlFor="grouped-select" ></InputLabel>
                      <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                         <ListSubheader>Nivel</ListSubheader>
                          <MenuItem value='1'>1</MenuItem>
                          <MenuItem value='2'>2</MenuItem>
                          <MenuItem value='3'>3</MenuItem>
                         <MenuItem value='4'>4</MenuItem>
                         <MenuItem value='5'>5</MenuItem>
                         <MenuItem value='6'>6</MenuItem>
                        <MenuItem value='7'>7</MenuItem>
                       </Select>
                    </FormControl>

                       <div>
                        <h5 style={{margin:'auto'}}>1 - Sem contato </h5>
                         <h5 style={{marginTop:'0px'}}>7 - Contato direto</h5>
                        </div>
               

                 <div>
                   <h4 style={{margin:'auto'}}>Informe o nível de comprometimento do PO com o Projeto</h4>      
                 </div>
                        
                   <FormControl  >
                    <InputLabel htmlFor="grouped-select" ></InputLabel>
                      <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                         <ListSubheader>Nivel</ListSubheader>
                          <MenuItem value='1'>1</MenuItem>
                          <MenuItem value='2'>2</MenuItem>
                          <MenuItem value='3'>3</MenuItem>
                         <MenuItem value='4'>4</MenuItem>
                         <MenuItem value='5'>5</MenuItem>
                         <MenuItem value='6'>6</MenuItem>
                        <MenuItem value='7'>7</MenuItem>
                       </Select>
                    </FormControl>

                       <div>
                        <h5 style={{margin:'auto'}}>1 - Não estava comprometido</h5>
                         <h5 style={{marginTop:'0px'}}>7 - Totalmente comprometido</h5>
                        </div>
               

                 <div>
                   <h4 style={{margin:'auto'}}>Informe o nível de disponibilidade e execução do Plano de Teste referente a esta Sprint</h4>      
                 </div>
                        
                   <FormControl  >
                    <InputLabel htmlFor="grouped-select" ></InputLabel>
                      <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                         <ListSubheader>Nivel</ListSubheader>
                          <MenuItem value='1'>1</MenuItem>
                          <MenuItem value='2'>2</MenuItem>
                          <MenuItem value='3'>3</MenuItem>
                         <MenuItem value='4'>4</MenuItem>
                         <MenuItem value='5'>5</MenuItem>
                         <MenuItem value='6'>6</MenuItem>
                        <MenuItem value='7'>7</MenuItem>
                       </Select>
                    </FormControl>

                       <div>
                        <h5 style={{margin:'auto'}}>1 - Não houve testes </h5>
                         <h5 style={{marginTop:'0px'}}>7 - Plano de Teste totalmente executado</h5>
                        </div>
               

                        <div>
                            <h4 style={{margin:'auto'}}>O que poderia ser sugerido para melhorar o desempenho do PO na próxima Sprint?</h4>
                            <h6 style={{marginTop:'0px'}}>Campo não obrigatório. Todas a sugestões serão enviadas anonimamente ao inbox do Product Owner</h6>
                        </div>
                        
                        <FormControl  >
                        <InputLabel htmlFor="grouped-select" ></InputLabel>
                        <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> setAnswerOthers(event.target.value)}>
                            <ListSubheader>Resposta</ListSubheader>
                                <MenuItem value='Nao' id="">Não</MenuItem>
                            <MenuItem value='Outros' id="">Outros</MenuItem>
                        </Select>
                        </FormControl>
                        







                    {/* SM */}
                    <h1> Avaliação do Scrum Master (SM) do Time</h1>
                            
                    <div>
                    <h4 style={{margin:'auto'}}>Informe o nível em que o SM removeu impedimentos</h4>      
                    </div>
                            
                    <FormControl  >
                        <InputLabel htmlFor="grouped-select" ></InputLabel>
                        <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                            <ListSubheader>Nivel</ListSubheader>
                            <MenuItem value='1'>1</MenuItem>
                            <MenuItem value='2'>2</MenuItem>
                            <MenuItem value='3'>3</MenuItem>
                            <MenuItem value='4'>4</MenuItem>
                            <MenuItem value='5'>5</MenuItem>
                            <MenuItem value='6'>6</MenuItem>
                            <MenuItem value='7'>7</MenuItem>
                        </Select>
                        </FormControl>

                        <div>
                        <h5 style={{margin:'auto'}}>1 - Não removeu nenhum</h5>
                        <h5 style={{marginTop:'0px'}}>7 - Removeu os possíveis</h5>
                        </div>


                    <div>
                      <h4 style={{margin:'auto'}}>Informe o nível em que o SM garantiu que o processo e valores do Scrum fossem seguidos</h4>      
                     </div>
                               
                      <FormControl  >
                         <InputLabel htmlFor="grouped-select" ></InputLabel>
                           <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                            <ListSubheader>Nivel</ListSubheader>
                              <MenuItem value='1'>1</MenuItem>
                               <MenuItem value='2'>2</MenuItem>
                               <MenuItem value='3'>3</MenuItem>
                               <MenuItem value='4'>4</MenuItem>
                               <MenuItem value='5'>5</MenuItem>
                               <MenuItem value='6'>6</MenuItem>
                              <MenuItem value='7'>7</MenuItem>
                            </Select>
                         </FormControl>
       
                         <div>
                           <h5 style={{margin:'auto'}}>1 - Não garantiu </h5>
                           <h5 style={{marginTop:'0px'}}>7 - Garantiu completamente</h5>
                         </div>


                         <div>
                      <h4 style={{margin:'auto'}}>Informe o nível em que o SM promoveu a interseção de todos os papéis</h4>      
                     </div>
                               
                      <FormControl  >
                         <InputLabel htmlFor="grouped-select" ></InputLabel>
                           <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                            <ListSubheader>Nivel</ListSubheader>
                              <MenuItem value='1'>1</MenuItem>
                               <MenuItem value='2'>2</MenuItem>
                               <MenuItem value='3'>3</MenuItem>
                               <MenuItem value='4'>4</MenuItem>
                               <MenuItem value='5'>5</MenuItem>
                               <MenuItem value='6'>6</MenuItem>
                              <MenuItem value='7'>7</MenuItem>
                            </Select>
                         </FormControl>
       
                         <div>
                           <h5 style={{margin:'auto'}}>1 - Não promoveu</h5>
                           <h5 style={{marginTop:'0px'}}>7 - Promoveu completamente</h5>
                         </div>



                     <div>
                      <h4 style={{margin:'auto'}}>Informe o nível em que o SM protejeu a equipe de interferências externas</h4>      
                     </div>
                               
                      <FormControl  >
                         <InputLabel htmlFor="grouped-select" ></InputLabel>
                           <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> event.target.value}>
                            <ListSubheader>Nivel</ListSubheader>
                              <MenuItem value='1'>1</MenuItem>
                               <MenuItem value='2'>2</MenuItem>
                               <MenuItem value='3'>3</MenuItem>
                               <MenuItem value='4'>4</MenuItem>
                               <MenuItem value='5'>5</MenuItem>
                               <MenuItem value='6'>6</MenuItem>
                              <MenuItem value='7'>7</MenuItem>
                            </Select>
                         </FormControl>
       
                         <div>
                           <h5 style={{margin:'auto'}}>1 - Não protejeu</h5>
                           <h5 style={{marginTop:'0px'}}>7 - Protejeu Completamente</h5>
                         </div>



                         <div>
                            <h4 style={{margin:'auto'}}>O que poderia ser sugerido para melhorar o desempenho do SM na próxima Sprint?</h4>
                            <h6 style={{marginTop:'0px'}}>Campo não obrigatório. Todas a sugestões serão enviadas anonimamente ao inbox do Scrum Master</h6>
                        </div>
                        
                        <FormControl>
                        <InputLabel htmlFor="grouped-select" ></InputLabel>
                        <Select defaultValue="" id="grouped-select" style={{width:200}} onChange={(event)=> setAnswerOthers(event.target.value)}>
                            <ListSubheader>Resposta</ListSubheader>
                                <MenuItem value='Nao' id="">Não</MenuItem>
                            <MenuItem value='Outros' id="">Outros</MenuItem>
                        </Select>
                        </FormControl>
                        




                    {/* Sprint Retrospective */}
                    <h1>Sprint Retrospective</h1>

                    <h4 style={{margin:'auto'}}>O que funcionou bem durante essa Sprint?</h4>        
                    <form >
                        <TextField
                        style={{ backgroundColor: 'white', borderRadius: '5px' }}
                        label='Answer'
                        type='text'
                        variant='outlined'
                        />
                    </form>
                    
                    <h4 style={{margin:'auto'}}>O que pode melhorar para a próxima Sprint?</h4>        
                    <form >
                        <TextField
                        style={{ backgroundColor: 'white', borderRadius: '5px' }}
                        label='Answer'
                        type='text'
                        variant='outlined'
                        />
                    </form>                    
                    
                    <h4 style={{margin:'auto'}}>O que seria recomendável se realizar neste Projeto?</h4>        
                    <form >
                        <TextField
                        style={{ backgroundColor: 'white', borderRadius: '5px' }}
                        label='Answer'
                        type='text'
                        variant='outlined'
                        />
                    </form>

                    
                    <h4 style={{margin:'auto'}}>O que poderia ser sugerido como inclusões e/ou modificações nas próximas avaliações?</h4>        
                    <form >
                        <TextField
                        style={{ backgroundColor: 'white', borderRadius: '5px' }}
                        label='Answer'
                        type='text'
                        variant='outlined'
                        />
                    </form>





































                </div>


        </div> 
        )

        }else{
            return false
        }

    }