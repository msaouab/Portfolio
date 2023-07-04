import styled from "styled-components";

const BottomNav = styled.div`
    display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: 5%;
	& > .Points {
		display: flex;
		gap: .5rem;
		& > span {
			width: .8rem;
			height: .8rem;
			background: white;
			border-radius: 50%;
		}
	}
	& > .Bottomline {
		width: 30%;
		height: 0.15rem;
		background-color: white;
	}
`;

const Footer = () => {
    return (
        <BottomNav className="">
            <div className="Points">
                <span />
                <span />
                <span />
            </div>
            <div className="Bottomline" />
        </BottomNav>
    );
};

export default Footer;
