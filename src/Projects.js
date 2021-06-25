import React from "react";


const Projects = () => (
    <div className='pageClass projects'
    style={{
             width: '100%',
             marginLeft: 'auto',
             marginRight: 'auto',
             textAlign: 'center',
             backgroundColor: 'white',
             height:'1200px',
             paddingTop:'90px'
         }}>

            <div style={{marginLeft: 'auto', marginTop: '0px', marginRight: 'auto', width: '80%', textAlign: 'left'}}>
                <p style={{textAlign: 'center'}}>A list of selected projects I developed while at COPPE/UFRJ</p><br/>
                <ul style={{margin: '0'}}>
                    <li>Project COPPETEC 1803: Chief engineer for the development of hardware and basic software of a 
                        Subcooling Monitoring System for the Reactor Core of the Angra-1 Nuclear Power Station. 
                        Since July 1986 to August 2008 (22 years), the system has been operational 24 hours a day, seven days a week.
                         The system was based on a PC-XT
                         motherboard with an 8088 CPU and 10 more I/O boards, designed and built by our team. 
                         Besides being responsible for the conception of the architecture and team management of 6 other people,
                          I was personally responsible for the development of the PL-M software, which was stored in EPROMS
                           that replaced the PC motherboard BIOS, making an embedded, diskless, no O.S. system, as 
                           required by the specifications. The application algorithms and calculations were developed by a 
                           Nuclear Engineering team and programmed in PL-M by our team.
                    </li><br />
                    <li>In 1992, I created the first version of the Thermoplastic Injection Production Monitoring System for MCM (now MAP Technology).
                         The system was developed in Turbo Pascal and Btrieve. 
                         MAP Technology has established itself as the leading provider of thermoplastic injection monitoring systems in Brazil, 
                         with exports to the United States and Europe.
                    </li><br />
                    <li>Architect and chief developer of the first two generations of a Library Automation System, 
                        called Biblivre (http://biblivre.org.br/), developed as a PRONAC Project presented by SABIN 
                        (National Library Friends Society) to the Ministry of Culture. It is a Web Application based on a 
                        Java/Tomcat and PostgreSQL backend and an HTML/CSS/Javascript/jQuery frontend. The system implemented 
                        a MARC 21 bibliographic  store and user interface. The system is now in its 5th generation and is
                         used by thousands of libraries in Brazil and other countries.
                    </li><br />
                    <li>Architect and developer of a forms based Automation System for Administrative Tasks in a University Lab.
                         The system, delivered in 2010, was a Web App developed in Java/Tomcat and PostgreSQL. It was modular and
                          allowed the addition of many types of workflows. It allowed the storage of scanned copies of invoices, 
                          fiscal documents and the like. It also allowed the generation of MS-Word, MS-Excel and PDF documents to be electronically published.
                    </li><br />
                    <li>Software developer of a mobile robot project. The intended use was to enable the telepresence of an engineer 
                        on a civil construction site. The project was conducted by Carlos Alexandre Coelho Mathias – 
                        Programa FAPERJ: Projetos de Inovação Tecnológica – Edital E26/190.007/2010 (SISTEMA MÓVEL DE INFORMAÇÃO REMOTA INTERATIVA)).
                         The robot was a server and the operator's station was a client and both were connected by the Internet.
                         We used the JavaMedia Framework which used an implementation of RTP and RTCP. Data and control were exchanged with a 
                         simple confirmation layer on top of UDP. 
                    </li><br />
                    <li>Architect and developer of a SCADA system for the monitoring of the harmonic content at the Ibiúna power substation (FURNAS S.A.).
                    This substation receives power from the Itaipu generation station, transmited in D.C., and converts it to A.C. In September 2010.
                    </li><br />
                    <li>Developer of a software interface from the SAGE electrical systems monitoring system to a custom built alarm processing
                         system for the Santo Antonio generation station, at Porto Velho, Rondonia, Brazil, in 2011.
                         </li><br />
                    <li>Architect and developer of a Web system to store electrical energy consumption data for a great number of clients.
                         The measurements are made at a 1 minute interval and sent to a server on the Internet. The system has a
                         friendly user interface to present consumption data to clients. In 2016. 
                    </li>     
                </ul>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
    </div>
)

export default Projects;