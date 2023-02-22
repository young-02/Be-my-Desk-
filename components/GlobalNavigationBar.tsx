import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

function GlobalNavigationBar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <GNBLayout theme={pathname === '/main' ? 'dark' : 'light'}>
      <div>
        <Link href="/main" className="logo">
          BE MY DESK
        </Link>
        <Link href="/post-list" className="button">
          포스트
        </Link>
        <Link href="/detail/write" className="button">
          글쓰기
        </Link>
      </div>
      <div>
        <Image
          alt="likes-icon"
          src={`/images/${
            pathname === '/main' ? 'dark' : 'light'
          }ThemeSearch.png`}
          width={20}
          height={20}
          style={{ cursor: 'pointer' }}
        />
        <Link href="/auth/sign-in" className="button">
          로그인
        </Link>
        <Link href="/auth/sign-up" className="button">
          회원가입
        </Link>
      </div>
    </GNBLayout>
  );
}

export default React.memo(GlobalNavigationBar);

const GNBLayout = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  top: 0rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 6.25rem 0px;
  background-color: ${(props) => (props.theme === 'light' ? 'white' : 'black')};
  font-family: 'Pretendard Variable';
  color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
  z-index: 999;

  > div {
    height: 6.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;

    .logo {
      font-size: 2.125rem;
      font-weight: 700;
      cursor: pointer;
    }

    .button {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      :hover {
        font-weight: 700;
        color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
      }
    }
  }
`;
