import { BaseMapTile } from "../../common/types";
import ButtonBlueDown from "./ButtonBlueDown";
import ButtonBlueUp from "./ButtonBlueUp";
import ButtonRedDown from "./ButtonRedDown";
import ButtonRedUp from "./ButtonRedUp";
import Column from "./Column";
import ColumnWall from "./ColumnWall";
import DoorsFrameLeft from "./DoorsFrameLeft";
import DoorsFrameRight from "./DoorsFrameRight";
import DoorsFrameTop from "./DoorsFrameTop";
import DoorsLeafClosed from "./DoorsLeafClosed";
import DoorsLeafOpen from "./DoorsLeafOpen";
import Floor1 from "./Floor1";
import Floor2 from "./Floor2";
import Floor3 from "./Floor3";
import Floor4 from "./Floor4";
import Floor5 from "./Floor5";
import Floor6 from "./Floor6";
import Floor7 from "./Floor7";
import Floor8 from "./Floor8";
import FloorLadder from "./FloorLadder";
import FloorSpikes from "./FloorSpikes";
import FloorStairs from "./FloorStairs";
import Hole from "./Hole";
import LeverLeft from "./LeverLeft";
import LeverRight from "./LeverRight";
import WallBannerBlue from "./WallBannerBlue";
import WallBannerGreen from "./WallBannerGreen";
import WallBannerRed from "./WallBannerRed";
import WallBannerYellow from "./WallBannerYellow";
import WallEdgeBottomLeft from "./WallEdgeBottomLeft";
import WallEdgeBottomRight from "./WallEdgeBottomRight";
import WallEdgeLeft from "./WallEdgeLeft";
import WallEdgeMidLeft from "./WallEdgeMidLeft";
import WallEdgeMidRight from "./WallEdgeMidRight";
import WallEdgeRight from "./WallEdgeRight";
import WallEdgeTopLeft from "./WallEdgeTopLeft";
import WallEdgeTopRight from "./WallEdgeTopRight";
import WallEdgeTshapeBottomLeft from "./WallEdgeTshapeBottomLeft";
import WallEdgeTshapeBottomRight from "./WallEdgeTshapeBottomRight";
import WallEdgeTshapeLeft from "./WallEdgeTshapeLeft";
import WallEdgeTshapeRight from "./WallEdgeTshapeRight";
import WallFountainBasinBlue from "./WallFountainBasinBlue";
import WallFountainBasinRed from "./WallFountainBasinRed";
import WallFountainMidBlue from "./WallFountainMidBlue";
import WallFountainMidRed from "./WallFountainMidRed";
import WallFountainTop1 from "./WallFountainTop1";
import WallFountainTop2 from "./WallFountainTop2";
import WallFountainTop3 from "./WallFountainTop3";
import WallGoo from "./WallGoo";
import WallGooBase from "./WallGooBase";
import WallHole1 from "./WallHole1";
import WallHole2 from "./WallHole2";
import WallLeft from "./WallLeft";
import WallMid from "./WallMid";
import WallOuterFrontLeft from "./WallOuterFrontLeft";
import WallOuterFrontRight from "./WallOuterFrontRight";
import WallOuterMidLeft from "./WallOuterMidLeft";
import WallOuterMidRight from "./WallOuterMidRight";
import WallOuterTopLeft from "./WallOuterTopLeft";
import WallOuterTopRight from "./WallOuterTopRight";
import WallRight from "./WallRight";
import WallTopLeft from "./WallTopLeft";
import WallTopMid from "./WallTopMid";
import WallTopRight from "./WallTopRight";

function MapTile({ variant, position, scale, zIndex }: BaseMapTile) {
  switch (variant) {
    case "column":
      return <Column position={position} scale={scale} zIndex={zIndex} />;
    case "column_wall":
      return <ColumnWall position={position} scale={scale} zIndex={zIndex} />;
    case "wall_fountain_mid_blue":
      return (
        <WallFountainMidBlue
          position={position}
          scale={scale}
          zIndex={zIndex}
        />
      );
    case "wall_fountain_mid_red":
      return (
        <WallFountainMidRed position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_fountain_basin_red":
      return (
        <WallFountainBasinRed
          position={position}
          scale={scale}
          zIndex={zIndex}
        />
      );
    case "wall_fountain_basin_blue":
      return (
        <WallFountainBasinBlue
          position={position}
          scale={scale}
          zIndex={zIndex}
        />
      );
    case "wall_goo_base":
      return <WallGooBase position={position} scale={scale} zIndex={zIndex} />;
    case "wall_goo":
      return <WallGoo position={position} scale={scale} zIndex={zIndex} />;
    case "wall_hole_1":
      return <WallHole1 position={position} scale={scale} zIndex={zIndex} />;
    case "wall_hole_2":
      return <WallHole2 position={position} scale={scale} zIndex={zIndex} />;
    case "wall_banner_blue":
      return (
        <WallBannerBlue position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_banner_red":
      return (
        <WallBannerRed position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_banner_green":
      return (
        <WallBannerGreen position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_banner_yellow":
      return (
        <WallBannerYellow position={position} scale={scale} zIndex={zIndex} />
      );
    case "floor_ladder":
      return <FloorLadder position={position} scale={scale} zIndex={zIndex} />;
    case "floor_spikes":
      return <FloorSpikes position={position} scale={scale} zIndex={zIndex} />;
    case "hole":
      return <Hole position={position} scale={scale} zIndex={zIndex} />;
    case "floor_stairs":
      return <FloorStairs position={position} scale={scale} zIndex={zIndex} />;
    case "floor_1":
      return <Floor1 position={position} scale={scale} zIndex={zIndex} />;
    case "floor_2":
      return <Floor2 position={position} scale={scale} zIndex={zIndex} />;
    case "floor_3":
      return <Floor3 position={position} scale={scale} zIndex={zIndex} />;
    case "floor_4":
      return <Floor4 position={position} scale={scale} zIndex={zIndex} />;
    case "floor_5":
      return <Floor5 position={position} scale={scale} zIndex={zIndex} />;
    case "floor_6":
      return <Floor6 position={position} scale={scale} zIndex={zIndex} />;
    case "floor_7":
      return <Floor7 position={position} scale={scale} zIndex={zIndex} />;
    case "floor_8":
      return <Floor8 position={position} scale={scale} zIndex={zIndex} />;
    case "wall_left":
      return <WallLeft position={position} scale={scale} zIndex={zIndex} />;
    case "wall_mid":
      return <WallMid position={position} scale={scale} zIndex={zIndex} />;
    case "wall_right":
      return <WallRight position={position} scale={scale} zIndex={zIndex} />;
    case "wall_top_left":
      return <WallTopLeft position={position} scale={scale} zIndex={zIndex} />;
    case "wall_top_mid":
      return <WallTopMid position={position} scale={scale} zIndex={zIndex} />;
    case "wall_top_right":
      return <WallTopRight position={position} scale={scale} zIndex={zIndex} />;
    case "button_red_up":
      return <ButtonRedUp position={position} scale={scale} zIndex={zIndex} />;
    case "button_red_down":
      return (
        <ButtonRedDown position={position} scale={scale} zIndex={zIndex} />
      );
    case "button_blue_up":
      return <ButtonBlueUp position={position} scale={scale} zIndex={zIndex} />;
    case "button_blue_down":
      return (
        <ButtonBlueDown position={position} scale={scale} zIndex={zIndex} />
      );
    case "lever_left":
      return <LeverLeft position={position} scale={scale} zIndex={zIndex} />;
    case "lever_right":
      return <LeverRight position={position} scale={scale} zIndex={zIndex} />;
    case "doors_frame_left":
      return (
        <DoorsFrameLeft position={position} scale={scale} zIndex={zIndex} />
      );
    case "doors_frame_right":
      return (
        <DoorsFrameRight position={position} scale={scale} zIndex={zIndex} />
      );
    case "doors_frame_top":
      return (
        <DoorsFrameTop position={position} scale={scale} zIndex={zIndex} />
      );
    case "doors_leaf_closed":
      return (
        <DoorsLeafClosed position={position} scale={scale} zIndex={zIndex} />
      );
    case "doors_leaf_open":
      return (
        <DoorsLeafOpen position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_edge_bottom_left":
      return (
        <WallEdgeBottomLeft position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_edge_bottom_right":
      return (
        <WallEdgeBottomRight
          position={position}
          scale={scale}
          zIndex={zIndex}
        />
      );
    case "wall_edge_mid_left":
      return (
        <WallEdgeMidLeft position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_edge_top_left":
      return (
        <WallEdgeTopLeft position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_edge_left":
      return <WallEdgeLeft position={position} scale={scale} zIndex={zIndex} />;
    case "wall_edge_right":
      return (
        <WallEdgeRight position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_edge_top_right":
      return (
        <WallEdgeTopRight position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_edge_mid_right":
      return (
        <WallEdgeMidRight position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_edge_tshape_bottom_right":
      return (
        <WallEdgeTshapeBottomRight
          position={position}
          scale={scale}
          zIndex={zIndex}
        />
      );
    case "wall_edge_tshape_bottom_left":
      return (
        <WallEdgeTshapeBottomLeft
          position={position}
          scale={scale}
          zIndex={zIndex}
        />
      );
    case "wall_edge_tshape_left":
      return (
        <WallEdgeTshapeLeft position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_edge_tshape_right":
      return (
        <WallEdgeTshapeRight
          position={position}
          scale={scale}
          zIndex={zIndex}
        />
      );
    case "wall_outer_front_right":
      return (
        <WallOuterFrontRight
          position={position}
          scale={scale}
          zIndex={zIndex}
        />
      );
    case "wall_outer_front_left":
      return (
        <WallOuterFrontLeft position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_outer_mid_left":
      return (
        <WallOuterMidLeft position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_outer_mid_right":
      return (
        <WallOuterMidRight position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_outer_top_left":
      return (
        <WallOuterTopLeft position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_outer_top_right":
      return (
        <WallOuterTopRight position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_fountain_top_1":
      return (
        <WallFountainTop1 position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_fountain_top_2":
      return (
        <WallFountainTop2 position={position} scale={scale} zIndex={zIndex} />
      );
    case "wall_fountain_top_3":
      return (
        <WallFountainTop3 position={position} scale={scale} zIndex={zIndex} />
      );
    default:
      throw new Error("MapTile variant doesn't exist");
  }
}

export default MapTile;
