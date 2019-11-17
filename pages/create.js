import Layout from "../components/MyLayout";
import { TextArea, InputGroup } from "@blueprintjs/core/";
import "normalize.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
const createForm = () => {
  return (
    <Layout>
      <InputGroup placeholder={"CheeseID"}></InputGroup>
    </Layout>
  );
};

export default createForm;

//0 CheeseId,
//1 CheeseNameEn,
//2 CheeseNameFr,
//3 ManufacturerNameEn,
//4 ManufacturerNameFr,
//5 ManufacturerProvCode,
//6 ManufacturingTypeEn,
//7 ManufacturingTypeFr,
//8 WebSiteEn,
//9 WebSiteFr,
//10 FatContentPercent,
//11 MoisturePercent,
//12 ParticularitiesEn,
//13 ParticularitiesFr,
//14 FlavourEn,
//15 FlavourFr,
//16 CharacteristicsEn,
//17 CharacteristicsFr,
//18 RipeningEn,
//19 RipeningFr,
//20 Organic,
//21 CategoryTypeEn,
//22 CategoryTypeFr,
//23 MilkTypeEn,
//24 MilkTypeFr,
//25 MilkTreatmentTypeEn,
//26 MilkTreatmentTypeFr,
//27 RindTypeEn,
//28 RindTypeFr,
//29 LastUpdateDate
