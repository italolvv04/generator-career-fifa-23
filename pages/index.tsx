import Image from "next/image";
import styles from "../styles.module.css";

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <h1>Gerador Modo Carreira - FIFA 23</h1>
      </div>
      <div className={styles.card}>
        <Image
          src="/easy-generator-background.png"
          width={400}
          height={400}
          alt="logo-easy"
        />
      </div>
      <div className={styles.cardOptionTeam}>
        <div>
          <h1> Quer gerar o modo carreira com quais times ? </h1>
        </div>
        <div>
          <a href="/geral" title="Todos os times">
            <Image
              src="/planeta-terra.png"
              width={30}
              height={30}
              alt="icon-mundo"
            />
          </a>
          <a href="/germany" title="Alemanha">
            <Image
              src="/germany.png"
              width={30}
              height={30}
              alt="icon-germany"
            />
          </a>
          <a href="/england" title="Inglaterra">
            <Image
              src="/england.png"
              width={30}
              height={30}
              alt="icon-england"
            />
          </a>
          <a href="/spanish" title="Espanha">
            <Image
              src="/spanish.png"
              width={30}
              height={30}
              alt="icon-spanish"
            />
          </a>
          <a href="/italy" title="Italia">
            <Image src="/italy.png" width={30} height={30} alt="icon-italy" />
          </a>
          <a href="/france" title="França">
            <Image src="/france.png" width={30} height={30} alt="icon-france" />
          </a>
        </div>

        <div>
          <Image
            src="/italo-logo.png"
            width={100}
            height={100}
            alt="logo-italo"
          />
          <span> © 2023 - Todos os Direitos Reservados </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
