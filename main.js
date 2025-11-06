const { createApp }     = Vue;
const { createRouter,
        createWebHashHistory } = VueRouter;


const QuemSouEu = {
  template: `
    <section>
      <h2>Quem Sou Eu?</h2>
      <p>
        Desenvolvedor Web com experiência em front-end e back-end, desde 2019, onde trabalhei em empresas como
        Enpersol Africa, One Media, SA, ABOVE, e ANAC.
      </p>
       <p>
        Licenciado em Informática de Gestão pela Universidade Wutivi, atualmente a frequentar o Mestrado em Engenharia
        Informática e Tecnologias Web (MEIW) na UAB - Portugal.
      </p>
      <div class="tag-list">
        <span class="tag">Mestrado - MEIW</span>
        <span class="tag">Programação Web Avançada</span>
      </div>
    </section>
  `
};

const OQueFaco = {
  template: `
    <section>
      <h2>O Que Faço?</h2>
      <ul>
        <li>Desenvolvimento Web e Android (HTML, CSS, JavaScript, Vue.js, Flutter).</li>
        <li>Analisa e Programador de Software (Java, JavaEE, Spring Boot, SQL Oracle).</li>
        <li>Integração de sistemas e serviços (APIs, Payments gateways, etc.).</li>
        <li>Estudo de PWAs, SPAs e arquiteturas orientadas a serviços.</li>
      </ul>
    </section>
  `
};

const Hobbies = {
  template: `
    <section>
      <h2>Hobbies</h2>
      <ul>
        <li>Ler e estudar sobre tecnologias Web e arquitetura de software.</li>
        <li>Explorar novas ferramentas e frameworks de programação.</li>
         <li>Ver e produzir filmes / séries de drama, comédia e acção.</li>
        <li>Estudar e operar no mercado cambial.</li>
      </ul>
    </section>
  `
};

const routes = [
  { path: "/",        redirect: "/quem" },
  { path: "/quem",    component: QuemSouEu },
  { path: "/faco",    component: OQueFaco },
  { path: "/hobbies", component: Hobbies }
];


const router = createRouter({
  history: createWebHashHistory(),
  routes
});


const app = createApp({
  data() {
    return {
      nome: "Assis Caetano",
      titulo: "Curriculum Vitae — Single Page Application"
    };
  }
});

app.use(router);
app.mount("#app");
