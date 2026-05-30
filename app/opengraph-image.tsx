import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '5G Case – Mobiles Enterprise-Netzwerk in unter 60 Sekunden';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(ellipse at 25% 30%, #16242e 0%, #0A0A0A 60%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#FF6B35',
            }}
          />
          <div
            style={{
              color: '#00C4FF',
              fontSize: 26,
              letterSpacing: 6,
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Comms Connect · 5G Case
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: 'white',
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            Kein Netz?
          </div>
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: '#00C4FF',
            }}
          >
            Unser Problem.
          </div>
          <div
            style={{
              marginTop: 28,
              color: 'rgba(255,255,255,0.72)',
              fontSize: 32,
              fontWeight: 400,
              maxWidth: 900,
            }}
          >
            Portables 5G-Koffersystem. Plug &amp; Play in unter 60 Sekunden.
            CE &amp; IP67 zertifiziert. Ab 1.999 €.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 40,
            color: 'rgba(255,255,255,0.55)',
            fontSize: 26,
          }}
        >
          <div>case-connect.de</div>
          <div>·</div>
          <div>Multi-Carrier 5G/LTE</div>
          <div>·</div>
          <div>500 m Reichweite</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
