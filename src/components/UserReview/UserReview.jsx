import React from 'react';
import s from './style.module.scss';
import photo from '../../image/user_icon.svg';

const UserReview = ({review}) => {
    return (
        <div className={s.reviews__card}>
        <div className={s.card__img}>
          <img src={photo} alt="autor" className={s.img__autor} /> 
        </div>
        <p className={s.card__text}>
          {/* {review.comment} */}nmmnmnmlorem*10
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, odit! Sapiente assumenda veniam possimus? Iure eaque cumque quaerat, aliquam similique tenetur quasi ipsa consequuntur aspernatur exercitationem sit ad consectetur sunt.
          Eveniet soluta modi ducimus cupiditate facilis, molestias incidunt esse totam rem sint eos voluptatem id eum saepe vel dolorum iure asperiores exercitationem debitis expedita cumque aliquid, commodi ipsam facere. Laudantium.
          Ea ipsa magni cumque neque nulla dolores est eum asperiores possimus voluptatem cum rerum recusandae vitae officiis vel consectetur enim iusto, harum explicabo ipsam error quisquam, fuga animi at? Totam.
          Qui asperiores modi corrupti, minus sequi placeat accusantium at id ullam molestias iste ex eum officiis nulla omnis? Iure doloribus necessitatibus sit quos cum ipsa! Repudiandae fugiat est qui earum.
          Possimus delectus atque a, iste, fugiat excepturi dolor molestiae voluptatem nobis vel nam, commodi at id quod dignissimos aut. Mollitia dolore itaque praesentium odio neque eos nesciunt magnam perspiciatis voluptatibus.
          Quo deserunt explicabo vel libero omnis. Magni, reiciendis quod totam id numquam incidunt eaque consectetur, sequi culpa deleniti provident suscipit porro cum odit corrupti? Labore, debitis voluptatibus. Quae, eaque corporis.
          Impedit, placeat labore perspiciatis vitae delectus officia assumenda molestiae, adipisci rem quam iste incidunt dolorem! Nemo corporis harum eius accusamus magni maxime quae, dignissimos atque consectetur fugiat, assumenda quaerat? Porro.
          Iure vel eveniet quaerat vero quas ab, magni, necessitatibus expedita optio reiciendis nobis explicabo dignissimos praesentium officia quam aut ipsam odit magnam veniam unde obcaecati aspernatur aliquam? Quos, consequatur necessitatibus?
          Magni eum voluptas dolorum distinctio perspiciatis natus odit quas. Necessitatibus, impedit voluptatum eos consequatur quaerat doloribus distinctio, delectus molestias odit reiciendis quisquam quas at, nobis ad enim porro cumque? Repellat.
          Commodi delectus dolor corrupti expedita temporibus! Adipisci nihil numquam est veritatis ducimus consectetur libero, voluptatem, quae fuga doloribus quod nesciunt nemo? Velit voluptatibus tenetur optio? Illo officia quaerat consequatur. Perspiciatis?
        </p>
        <div className={s.card__autor}>
          {/* {review.user} */}hghjghjg
          <span className={s.date}>
            {/* {review.created_at} */}hghghg
          </span>
        </div>
      </div>
    );
};

export default UserReview;