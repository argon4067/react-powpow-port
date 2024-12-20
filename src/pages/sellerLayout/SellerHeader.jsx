import React, {useEffect, useState} from 'react';
import {Link, useNavigate , useParams } from 'react-router-dom';
import S from "./style";
import {useDispatch, useSelector} from "react-redux";
import {setUser, setUserStatus} from "../../modules/user";

const SellerHeader = () => {
  const { currentUser, isLogin } = useSelector((state) => state.user)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [currentTitle, setCurrentTitle] = useState("상품 관리");
  const { id } = useParams();

  const menuItems = [
    {
      title: [
        {name: "상품 관리", path: "/seller"}
      ],
      submenu: [
        { name: "상품조회", path: "/seller" },
        { name: "상품 등록", path: "/seller/product-write" }
      ]
    },
    {
      title: [
        {name: "주문 관리", path: "/seller/seller-order"}
      ],
      submenu: [
        { name: "주문조회", path: "/seller/seller-order" }
      ]
    },
    {
      title: [
        {name: "정산 관리", path: "/seller/seller-adjustment"}
      ],
      submenu: [
        { name: "정산내역조회", path: "/seller/seller-adjustment" }
      ]
    },
    {
      title: [
        {name: "판매자 관리", path: `/seller/seller-info/${id}`}
      ],
      submenu: [
        { name: "판매자정보 관리", path: `/seller/seller-info/${id}` }
      ]
    },
    {
      title: [
        {name: "매출 관리", path: "/seller/seller-revenue"}
      ],
      submenu: [
        { name: "매출 조회", path: "/seller/seller-revenue" }
      ]
    }
  ];

  const handleMenuItemClick = (title) => {
    setCurrentTitle(title);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  const handleMenuItemHover = (index) => {
    if (isMenuOpen) {
      setActiveSubmenu(index);
    }
  };

  const handleMenuLeave = () => {
    setActiveSubmenu(null);
  };

  const handleFrameLeave = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
      setActiveSubmenu(null);
    }, 300);
  };


  const menus = menuItems.map((item, index) => (
      <li key={index} onMouseEnter={() => handleMenuItemHover(index)} onMouseLeave={handleMenuLeave}>
        <Link to={item.title[0].path} onClick={() => handleMenuItemClick(item.title[0].name)}>
          <p>{item.title[0].name}</p>
        </Link>
        <div style={{height: activeSubmenu === index ? `${item.submenu.length * 30}px` : '0'}}>
          {item.submenu.map((subItem, subIndex) => (
              <Link key={subIndex} to={subItem.path} style={{color: 'white'}} onClick={() => handleMenuItemClick(item.title[0].name)}>
                <span>{subItem.name}</span>
              </Link>
          ))}
        </div>
      </li>
  ));

  const[posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async() => {
      console.log(`Requesting posts for seller with ID: ${id}`);  // ID 로그 출력
      const response = await fetch(`http://localhost:10000/products/seller-all-list/${id}`);
      if(!response.ok) return console.error(`데이터가 없습니다`)
      const posts = await response.json();
      return posts;
    }

    getPosts().then(setPosts).catch(console.error);
  }, []);

  console.log(id)
  // 로그아웃
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login/seller');
  };

  return (
      <S.Header>
        <S.MenuWrap>
          <img src={process.env.PUBLIC_URL + "/assets/images/seller/menu.svg"} alt="메뉴" onClick={handleMenuClick}/>
          <span>{currentTitle}</span>
          <S.EntireMenu>
            <S.MenuFrame style={{ display: isMenuOpen ? 'flex' : 'none' }}  onMouseLeave={handleFrameLeave}>
              <S.MenuHeader>
                { isLogin ? (
                    <>
                      <S.Welcome>{currentUser.memberName}님 환영합니다.</S.Welcome>
                      <Link to="/login" onClick={handleLogout}>로그아웃</Link>
                    </>
                ) : (
                    <S.Welcome>세션 만료</S.Welcome>
                )}

              </S.MenuHeader>
              <S.MenuForm>
                <ul>
                  {menus}
                </ul>
              </S.MenuForm>
            </S.MenuFrame>
          </S.EntireMenu>
        </S.MenuWrap>
      </S.Header>
  );
};

export default SellerHeader;