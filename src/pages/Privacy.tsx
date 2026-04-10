import { useEffect, createElement } from 'react';
import { PageTitle } from '../components/PageTitle';
import styles from './Privacy.module.css';

export function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <PageTitle
        title="Privacy Policy"
        description="最終更新日: 2026年4月10日"
      />
      <div className={styles.content}>
        <div className={styles.container}>
          {/* ===== 日本語 ===== */}
          <article className={styles.article} lang="ja">
            <p>
              本プライバシーポリシーは、fingerEase（以下「当サイト」）が運営するウェブサイトおよび関連サービスにおける、ユーザー情報の取り扱いについて定めるものです。
            </p>

            <Section title="1. 取得する情報">
              <p>
                当サイトでは、サービス改善および運営管理のため、以下の情報を取得する場合があります。
              </p>
              <ul>
                <li>IP アドレス</li>
                <li>ブラウザの種類・バージョン</li>
                <li>閲覧したページ、閲覧日時、滞在時間</li>
                <li>参照元 URL、端末情報</li>
              </ul>
            </Section>

            <Section title="2. 情報の利用目的">
              <p>取得した情報は、以下の目的で利用します。</p>
              <ul>
                <li>サイトの機能改善・品質向上</li>
                <li>不正利用や障害の調査・対応</li>
                <li>アクセス状況の分析</li>
                <li>広告配信および効果測定</li>
              </ul>
            </Section>

            <Section title="3. Cookie の利用">
              <p>
                当サイトでは、ユーザー体験の向上や広告配信の最適化のために Cookie を利用する場合があります。Cookie
                はブラウザ設定で無効化できますが、一部機能が正常に動作しない場合があります。
              </p>
            </Section>

            <Section title="4. アクセス解析ツールについて">
              <p>
                当サイトでは、利用状況を把握するためにアクセス解析ツールを利用する場合があります。これらのツールは
                Cookie 等を通じて情報を収集することがありますが、個人を直接特定する情報は含みません。
              </p>
            </Section>

            <Section title="5. 広告配信について">
              <p>
                当サイトでは、第三者配信の広告サービス（Google AdSense）を利用する場合があります。広告配信事業者は、ユーザーの興味に応じた広告表示のために Cookie
                を使用することがあります。
              </p>
              <p>
                Google
                によるデータ利用の詳細は、以下をご参照ください。
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                  Google 広告に関するポリシー
                </a>
              </p>
            </Section>

            <Section title="6. 第三者提供">
              <p>
                当サイトは、法令に基づく場合を除き、個人情報を本人の同意なく第三者に提供しません。
              </p>
            </Section>

            <Section title="7. 外部リンクについて">
              <p>
                当サイトには外部サイトへのリンクが含まれる場合があります。リンク先サイトにおける情報の取り扱いについては、各サイトのプライバシーポリシーをご確認ください。
              </p>
            </Section>

            <Section title="8. ポリシーの変更">
              <p>
                本ポリシーは必要に応じて改定されることがあります。変更後の内容は当サイトに掲載した時点で効力を生じます。
              </p>
            </Section>
          </article>

          <hr className={styles.divider} />

          {/* ===== English ===== */}
          <article className={styles.article} lang="en">
            <h2 className={styles.heading}>Privacy Policy</h2>
            <p className={styles.updated}>Last updated: April 10, 2026</p>

            <p>
              This Privacy Policy explains how fingerEase ("the Site")
              collects, uses, and manages user information across its website
              and related services.
            </p>

            <Section title="1. Information We Collect" headingLevel={3}>
              <p>
                We may collect the following information for operation and
                improvement purposes:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited, access time, and time spent</li>
                <li>Referrer URL and device information</li>
              </ul>
            </Section>

            <Section title="2. Purpose of Use" headingLevel={3}>
              <p>Collected information may be used to:</p>
              <ul>
                <li>Improve site quality and user experience</li>
                <li>Investigate abuse, errors, or incidents</li>
                <li>Analyze traffic and usage trends</li>
                <li>Deliver and measure advertising</li>
              </ul>
            </Section>

            <Section title="3. Cookies" headingLevel={3}>
              <p>
                The Site may use cookies to improve usability and optimize
                advertising. You can disable cookies in your browser settings,
                though some features may not function properly.
              </p>
            </Section>

            <Section title="4. Analytics" headingLevel={3}>
              <p>
                We may use analytics tools to understand site usage. These
                tools may collect information through cookies or similar
                technologies, but they do not directly identify individuals.
              </p>
            </Section>

            <Section title="5. Advertising" headingLevel={3}>
              <p>
                The Site may use third-party advertising services such as
                Google AdSense. Advertising partners may use cookies to show ads
                based on user interests.
              </p>
              <p>
                For details about how Google uses data, please see{' '}
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                  Google's advertising policies
                </a>
                .
              </p>
            </Section>

            <Section title="6. Sharing with Third Parties" headingLevel={3}>
              <p>
                We do not provide personal information to third parties without
                consent, except where required by law.
              </p>
            </Section>

            <Section title="7. External Links" headingLevel={3}>
              <p>
                The Site may contain links to external websites. Please review
                the privacy policies of those websites for their data handling
                practices.
              </p>
            </Section>

            <Section title="8. Changes to This Policy" headingLevel={3}>
              <p>
                We may update this Privacy Policy as needed. Changes become
                effective when posted on this Site.
              </p>
            </Section>
          </article>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
  headingLevel = 2,
}: {
  title: string;
  children: React.ReactNode;
  headingLevel?: 2 | 3;
}) {
  const heading =
    headingLevel === 3
      ? createElement('h3', null, title)
      : createElement('h2', null, title);
  return (
    <section>
      {heading}
      {children}
    </section>
  );
}
