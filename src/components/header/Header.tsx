import { AvatarLayout } from "@/components/avatar/AvatarLayout";

export const Header = () => {
  return (
    <div className="mb-3 sticky-top bg-white" style={{zIndex:1030}}>
      
        <div className="shadow-lg d-flex justify-content-between ">
          <div className="hstack gap3">
            <div className="p-3">
              <input type="text" />
            </div>
            <div className="p-3">
              <button type="button" className="btn btn-primary">
                Click
              </button>
            </div>
          </div>

          <div className="hstack" style={{ marginRight: "15px" }}>
            <AvatarLayout
              src="https://steamuserimages-a.akamaihd.net/ugc/2100422066956953334/BCFFD0DB0C56F71CD288304540E39FC2FADFD155/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"
              alt="hello"
              size={50}
            />
          </div>
        </div>
      
    </div>
  );
};
