import { createBrowserRouter } from "react-router-dom";

import Pay from "./pages/pay";
import Services from "./pages/services";
import Layout from "./Layout"
import WirtingTalent from "./pages/wirting-talent";
import VoiceTalent from "./pages/voice-talent";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
       {
          index: true,
          path: "/pay",
          element: <Pay />,
        }, 
        // {
        //     index: true,
        //     path: "/services",
        //     element: <Services />,
        //   }, 
        // {
        //   path: "/service/voice-talent",
        //   element: <VoiceTalent />,
        // },
        // {
        //   path: "service/writing-talent",
        //   element: <WirtingTalent />,
        // },
      ],
    },
  ]);