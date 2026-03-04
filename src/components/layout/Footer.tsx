/**
 * 푸터 컴포넌트
 * - PompCore 전역 하단 영역
 * - 회사 정보, 프로젝트 링크, 법적 고지 포함
 */
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../constants/projects';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-lg font-bold text-gradient mb-3">PompCore</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              일상을 더 스마트하게 만드는<br />
              디지털 서비스 플랫폼
            </p>
          </div>

          {/* 프로젝트 링크 (자동 생성) */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">프로젝트</h4>
            <ul className="space-y-2">
              {PROJECTS.map((project) => (
                <li key={project.id}>
                  <Link
                    to={`/projects#${project.id}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {project.icon} {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 법적 고지 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">안내</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors">
                  회사 소개
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} PompCore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
