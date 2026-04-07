import { useEffect } from 'react';
import styles from './Terms.module.css';

export function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* ===== 日本語 ===== */}
        <article className={styles.article} lang="ja">
          <h1 className={styles.heading}>利用規約</h1>
          <p className={styles.updated}>最終更新日: 2026年4月7日</p>

          <p>
            本利用規約（以下「本規約」）は、fingerEase（以下「当サイト」）が提供するウェブサイトおよび関連サービス（ポータルサイトからリンクされる個人開発プロジェクトを含む）の利用条件を定めるものです。当サイトを利用された場合、本規約に同意したものとみなします。
          </p>

          <Section title="1. 適用範囲">
            <p>
              本規約は、当サイト（finger-ease.github.io）および当サイトからリンクされる fingerEase が運営するすべてのプロジェクトに適用されます。
            </p>
          </Section>

          <Section title="2. 禁止事項">
            <p>当サイトの利用にあたり、以下の行為を禁止します。</p>
            <ul>
              <li>法令または公序良俗に違反する行為</li>
              <li>当サイトのサーバーまたはネットワークに過度な負荷をかける行為</li>
              <li>当サイトの運営を妨害する行為</li>
              <li>他のユーザーまたは第三者の権利を侵害する行為</li>
              <li>当サイトのコンテンツを無断で複製・転載・改変する行為（ライセンスで許可されている場合を除く）</li>
            </ul>
          </Section>

          <Section title="3. 免責事項">
            <ul>
              <li>当サイトのコンテンツは「現状有姿」で提供されます。正確性、完全性、有用性について、明示・黙示を問わず一切保証しません。</li>
              <li>当サイトの利用により生じた損害について、運営者は一切の責任を負いません。</li>
              <li>当サイトからリンクされる外部サイトの内容について、運営者は責任を負いません。</li>
            </ul>
          </Section>

          <Section title="4. 広告について">
            <p>
              当サイトでは、第三者配信の広告サービス（Google AdSense）を利用する場合があります。広告配信事業者は、ユーザーの興味に基づく広告を表示するために Cookie を使用することがあります。
            </p>
            <p>
              Google による Cookie の利用については、
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                Google 広告に関するポリシー
              </a>
              をご参照ください。
            </p>
          </Section>

          <Section title="5. Cookie の利用">
            <p>
              当サイトでは、ユーザー体験の向上および広告配信のために Cookie を使用する場合があります。Cookie はブラウザの設定により無効にすることが可能ですが、一部の機能が正常に動作しなくなる場合があります。
            </p>
          </Section>

          <Section title="6. プライバシーとデータ収集">
            <p>
              当サイトでは、アクセス解析や広告配信のために以下の情報を取得する場合があります。
            </p>
            <ul>
              <li>アクセス元の IP アドレス</li>
              <li>ブラウザの種類・バージョン</li>
              <li>参照元の URL</li>
              <li>閲覧ページ・閲覧時間</li>
            </ul>
            <p>
              これらの情報は個人を特定するものではなく、サイト改善および広告配信の目的でのみ利用されます。
            </p>
          </Section>

          <Section title="7. 規約の変更">
            <p>
              運営者は、必要に応じて本規約を変更できるものとします。変更後の規約は、当サイト上に掲載した時点で効力を生じます。
            </p>
          </Section>

          <Section title="8. 準拠法">
            <p>本規約の解釈は日本法に準拠するものとします。</p>
          </Section>
        </article>

        <hr className={styles.divider} />

        {/* ===== English ===== */}
        <article className={styles.article} lang="en">
          <h1 className={styles.heading}>Terms of Service</h1>
          <p className={styles.updated}>Last updated: April 7, 2026</p>

          <p>
            These Terms of Service ("Terms") govern your use of fingerEase websites and related services, including all projects linked from the portal site. By accessing or using the site, you agree to these Terms.
          </p>

          <Section title="1. Scope">
            <p>
              These Terms apply to finger-ease.github.io and all projects operated by fingerEase that are linked from the portal.
            </p>
          </Section>

          <Section title="2. Prohibited Activities">
            <p>The following activities are prohibited when using this site:</p>
            <ul>
              <li>Violating any applicable laws or regulations</li>
              <li>Placing excessive load on the site's servers or network</li>
              <li>Interfering with the operation of the site</li>
              <li>Infringing on the rights of other users or third parties</li>
              <li>Reproducing, redistributing, or modifying content without permission (unless permitted by license)</li>
            </ul>
          </Section>

          <Section title="3. Disclaimer">
            <ul>
              <li>Content on this site is provided "as is" without any warranty of accuracy, completeness, or fitness for a particular purpose.</li>
              <li>The operator shall not be liable for any damages arising from the use of this site.</li>
              <li>The operator is not responsible for the content of external sites linked from this site.</li>
            </ul>
          </Section>

          <Section title="4. Advertising">
            <p>
              This site may use third-party advertising services (Google AdSense). Advertising providers may use cookies to display ads based on user interests.
            </p>
            <p>
              For details on how Google uses cookies, please refer to{' '}
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                Google's advertising policies
              </a>.
            </p>
          </Section>

          <Section title="5. Use of Cookies">
            <p>
              This site may use cookies to improve user experience and for advertising purposes. You may disable cookies through your browser settings, but some features may not function properly.
            </p>
          </Section>

          <Section title="6. Privacy and Data Collection">
            <p>
              This site may collect the following information for analytics and advertising purposes:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Referring URL</li>
              <li>Pages viewed and time spent</li>
            </ul>
            <p>
              This information does not personally identify users and is used solely for site improvement and advertising.
            </p>
          </Section>

          <Section title="7. Changes to These Terms">
            <p>
              The operator reserves the right to modify these Terms at any time. Updated Terms take effect upon posting on this site.
            </p>
          </Section>

          <Section title="8. Governing Law">
            <p>These Terms shall be governed by the laws of Japan.</p>
          </Section>
        </article>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
