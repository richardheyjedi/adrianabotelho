# Árvore interativa

Versão independente e responsiva, protegida por senha no navegador.

O acesso é liberado somente após informar a senha definida na página. Como este é um site estático, a barreira não substitui autenticação no servidor: o conteúdo continua tecnicamente acessível no código-fonte.

## Rodar localmente

Na pasta deste projeto, execute:

```powershell
node server.mjs
```

Depois abra <http://127.0.0.1:4173> ou a página da árvore em <http://127.0.0.1:4173/arvore/>.

Para publicar no GitHub Pages, envie o `index.html` e a pasta `arvore/` para um repositório e ative Pages em **Settings → Pages → Deploy from a branch**. A rota ficará disponível em `/arvore/`.
