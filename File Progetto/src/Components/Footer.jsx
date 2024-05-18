import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1B263B', padding: '20px', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ marginRight: '20px' }}>
        <h2 style={{ marginBottom: '10px' }}>Indirizzo</h2>
        <p>Via Caravaggio, 32 - Treviglio</p>
      </div>
      <div style={{ marginRight: '20px' }}>
        <h2 style={{ marginBottom: '10px' }}>Email</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '5px' }}>
            <a href="mailto:casalixluca@gmail.com" style={{ color: '#fff' }}>casalixluca@gmail.com</a>
          </li>
          <li style={{ marginBottom: '5px' }}>
            <a href="mailto:muscolinoalessandro05@gmail.com" style={{ color: '#fff' }}>muscolinoalessandro05@gmail.com</a>
          </li>
          <li style={{ marginBottom: '5px' }}>
            <a href="mailto:thatboifrunz@gmail.com" style={{ color: '#fff' }}>thatboifrunz@gmail.com</a>
          </li>
          <li style={{ marginBottom: '5px' }}>
            <a href="mailto:simone.conca2006@gmail.com" style={{ color: '#fff' }}>simone.conca2006@gmail.com</a>
          </li>
          <li style={{ marginBottom: '5px' }}>
            <a href="mailto:laila0azza5@gmail.com" style={{ color: '#fff' }}>laila0azza5@gmail.com</a>
          </li>
          <li style={{ marginBottom: '5px' }}>
            <a href="mailto:malaikaahmad03@gmail.com" style={{ color: '#fff' }}>malaikaahmad03@gmail.com</a>
          </li>
          <li style={{ marginBottom: '5px' }}>
            <a href="mailto:misciapopov199@gmail.com" style={{ color: '#fff' }}>misciapopov199@gmail.com</a>
          </li>
          <li style={{ marginBottom: '5px' }}>
            <a href="mailto:n.giavarini05@gmail.com" style={{ color: '#fff' }}>n.giavarini05@gmail.com</a>
          </li>
        </ul>
      </div>
      <div style={{ paddingRight: '30px' }}>
        <h2 style={{ marginBottom: '10px' }}>Pagina GitHub</h2>
        <p>Visita la nostra pagina su GitHub:</p>
        <a href="https://github.com/TgCas24/Sorint2.git" style={{ color: '#fff', textDecoration: 'underline' }}>GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
