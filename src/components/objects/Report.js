 import React from 'react';
import './Report.css';

 function Report(props) {
     const {title} = props.title
     return (
         <section className={'report col-sm-12 container-fluid'}>
             {/*<h1 className={'reportTitle'}>*/}
             {/*    {title}*/}
             {/*</h1>*/}
             <article className={'row article'}>
                 <section className={'col-sm-7 articlePrim'}>
                     primary
                 </section>
                 <section className={'col-sm-4 articleSec row'}>
                     <section className={'col-sm-5'}>
                         test
                     </section>
                     <section className={'col-sm-5'}>
                         test
                     </section>
                     <section className={'col-sm-5'}>
                         test
                     </section>
                     <section className={'col-sm-5'}>
                         test
                     </section>
                 </section>
             </article>
         </section>
     );
 }

 export default Report;
